import { ChangeEvent, FormEvent, useEffect, useState, useMemo } from 'react'
import {
  useModal,
} from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import times from 'lodash/times'
import isEmpty from 'lodash/isEmpty'
import { useInitialBlock } from 'state/block/hooks'
import { SnapshotCommand } from 'state/types'
import useToast from 'hooks/useToast'
import useWeb3Provider from 'hooks/useActiveWeb3React'
import { signMessage } from 'utils/web3React'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { sendSnapshotData, Message, generateMetaData, generatePayloadData } from '../helpers'
import { FormErrors } from './styles'
import Choices, { Choice, makeChoice, MINIMUM_CHOICES } from './Choices'
import { combineDateAndTime, getFormErrors } from './helpers'
import { FormState } from './types'
import { ADMINS } from '../config'
import VoteDetailsModal from '../components/VoteDetailsModal'
import NavGame from '../NavGame'


const EasyMde = dynamic(() => import('components/EasyMde'), {
  ssr: false,
})

const CreateChallenge = () => {
  const [state, setState] = useState<FormState>({
    name: '',
    body: '',
    choices: times(MINIMUM_CHOICES).map(makeChoice),
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
    snapshot: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [fieldsState, setFieldsState] = useState<{ [key: string]: boolean }>({})
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const initialBlock = useInitialBlock()
  const { push } = useRouter()
  const { library, connector } = useWeb3Provider()
  const { toastSuccess, toastError } = useToast()
  const [onPresentVoteDetailsModal] = useModal(<VoteDetailsModal block={state.snapshot} />)
  const { name, body, choices, startDate, startTime, endDate, endTime, snapshot } = state
  const formErrors = getFormErrors(state, t)

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    try {
      setIsLoading(true)
      const proposal = JSON.stringify({
        ...generatePayloadData(),
        type: SnapshotCommand.PROPOSAL,
        payload: {
          name,
          body,
          snapshot,
          start: combineDateAndTime(startDate, startTime),
          end: combineDateAndTime(endDate, endTime),
          choices: choices
            .filter((choice) => choice.value)
            .map((choice) => {
              return choice.value
            }),
          metadata: generateMetaData(),
          type: 'single-choice',
        },
      })

      const sig = await signMessage(connector, library, account, proposal)

      if (sig) {
        const msg: Message = { address: account, msg: proposal, sig }

        // Save proposal to snapshot
        const data = await sendSnapshotData(msg)

        // Redirect user to newly created proposal page
        push(`/voting/proposal/${data.ipfsHash}`)

        toastSuccess(t('Proposal created!'))
      } else {
        toastError(t('Error'), t('Unable to sign payload'))
      }
    } catch (error) {
      toastError(t('Error'), (error as Error)?.message)
      console.error(error)
      setIsLoading(false)
    }
  }

  const updateValue = (key: string, value: string | Choice[] | Date) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))

    // Keep track of what fields the user has attempted to edit
    setFieldsState((prevFieldsState) => ({
      ...prevFieldsState,
      [key]: true,
    }))
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = evt.currentTarget
    updateValue(inputName, value)
  }

  const handleEasyMdeChange = (value: string) => {
    updateValue('body', value)
  }

  const handleChoiceChange = (newChoices: Choice[]) => {
    updateValue('choices', newChoices)
  }

  const handleDateChange = (key: string) => (value: Date) => {
    updateValue(key, value)
  }

  const options = useMemo(() => {
    return {
      hideIcons:
        account && ADMINS.includes(account.toLowerCase())
          ? []
          : ['guide', 'fullscreen', 'preview', 'side-by-side', 'image'],
    }
  }, [account])

  useEffect(() => {
    if (initialBlock > 0) {
      setState((prevState) => ({
        ...prevState,
        snapshot: initialBlock,
      }))
    }
  }, [initialBlock, setState])

  return (
    <>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xl-7">
                          <div className="card">
                            <div className="card-header border-0 pb-0 justify-content-between">
                              <h4 className="fs-18">Create Challenge</h4>
                            </div>
                            <div className="card-body">

                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <input id="name" type="text" name="name" value={name} className="input1" placeholder="Challenge Title"  onChange={handleChange} required />
                                    <label className="mx-3">
                                    {formErrors.name && fieldsState.name && <FormErrors errors={formErrors.name} />}
                                    </label>
                                </div>
                                <div className="row">
                              <div className='m-3'  style={{width:"-webkit-fill-available"}}>
                                {/* @ts-ignore */}
                                <EasyMde
                                  id="body"
                                  name="body"
                                  onTextChange={handleEasyMdeChange}
                                  value={body}
                                  options={options}
                                  required
                                  />
                              {formErrors.body && fieldsState.body && <FormErrors errors={formErrors.body} />}
                            </div>
                                {/* {body && (
                                  <div mb="24px">
                                    <Card>
                                      <CardHeader>
                                        <Heading as="h3" scale="md">
                                          {t('Preview')}
                                        </Heading>
                                      </CardHeader>
                                      <CardBody p="0" px="24px">
                                        <ReactMarkdown>{body}</ReactMarkdown>
                                      </CardBody>
                                    </Card>
                                  </div>
                                )} */}
                            </div>

                              <Choices choices={choices} onChange={handleChoiceChange} />
                              {formErrors.choices && fieldsState.choices && <FormErrors errors={formErrors.choices} />}

                              {account ? (
                          <>
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-lg w-100 mt-4"
                                  // disabled={!isEmpty(formErrors)}
                                  >
                                  Submit
                                </button>
                                <p color="failure" >
                                {'You need at least %count% voting power to publish a proposal'}
                                
                                </p>
                                <button  type="button"  onClick={onPresentVoteDetailsModal} >
                                  {t('Check voting power')}
                                </button>
                          </>
                        ) : (
                          <ConnectWalletButton width="100%" type="button" />
                        )}

                              </form>

                            </div>
                          </div>
                        </div>
                            <div className="col-5">
                            <div className="card-header align-items-start border-0">
									<div>
										<h4 className="fs-20 mb-3">Today's Challenge</h4>
										<span className="fs-12 font-weight-bold success">@challengecreator-1</span>

										<h4 className="fs-18 mb-0 pb-2">Challenge Title</h4>
										<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
											do
											eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
											suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
											vel
											facilisis. </span>
										<h4 className="fs-12 text-white pt-3">Rules</h4>
										<ul className="fs-12">
											<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
											<li><i className="fa-solid fa-check pr-2"></i>Lorem ipsum dolor sit amet.</li>
										</ul>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
</>

  )
}

export default CreateChallenge
