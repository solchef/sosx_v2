import { ChangeEvent, FormEvent, useEffect, useState, useMemo } from 'react'
import { CardBody, useModal } from '@pancakeswap/uikit'
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
import NavGame from '../NavGame';
import { CID, create } from 'ipfs-http-client';
import ReactMarkdown from 'react-markdown';
import { useMediaPredicate } from 'react-media-hook';
import { useStakingContract } from 'hooks/useContract';
// import MDEditor from './MDEdit,or'

// const MDEditor = dynamic(
//   () => import("@uiw/react-md-editor"),
//   { ssr: false }
// );

const server = create({
	url: process.env.NEXT_PUBLIC_SOSX_IPFS_URL
});



const EasyMde = dynamic(() => import('components/EasyMde'), {
  ssr: false,
})

const CreateChallenge = () => {
  const router = useRouter();
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
  const [ votingLevel, setVotingLevel] = useState(0)
  const [fieldsState, setFieldsState] = useState<{ [key: string]: boolean }>({})
  const [images, setImages] = useState<{ cid: CID; path: string }[]>([]);
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const initialBlock = useInitialBlock()
  const { push } = useRouter()
  const { library, connector } = useWeb3Provider()
  const { toastSuccess, toastError } = useToast()
  const { name, body, choices, startDate, startTime, endDate, endTime, snapshot } = state
  const formErrors = getFormErrors(state, t)
  const biggerThan1400 = useMediaPredicate("(min-width: 1400px)");
	const biggest1400 = useMediaPredicate("(max-width: 1400px)");
	const contract = useStakingContract();
  const [onPresentVoteDetailsModal] = useModal(<VoteDetailsModal block={state.snapshot} />)


  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    
    if(votingLevel >= 2){

   
    try {
      setIsLoading(true)
      const challenge = JSON.stringify({
        ...generatePayloadData(),
        type: SnapshotCommand.PROPOSAL,
        payload: {
          name,
          body,
          snapshot,
          start: combineDateAndTime(startDate, startTime),
          end: combineDateAndTime(endDate, endTime),
          creator: account,
          created: new Date(),
          rules: choices
            .filter((choice) => choice.value)
            .map((choice) => {
              return choice.value
            }),
          metadata: generateMetaData(),
          type: 'challenge-with-rules',
        },
      })

      const sig = await signMessage(connector, library, account, challenge)

      if (sig) {
        const forIPFS = JSON.stringify({
          ...generatePayloadData(),
          type: SnapshotCommand.PROPOSAL,
          signiture: sig.toString(),
          payload: {
            name,
            body,
            snapshot,
            start: combineDateAndTime(startDate, startTime),
            end: combineDateAndTime(endDate, endTime),
            creator: account,
            created: new Date(),
            choices: choices
              .filter((choice) => choice.value)
              .map((choice) => {
                return choice.value
              }),
            metadata: generateMetaData(),
            type: 'challenge-with-rules',
          },
        }, null, 2)

        const challengeName = `challenge` + `-${name.replaceAll(' ', '-')}`
        await server.files.mkdir(`/challenges/${challengeName}`)
        await server.files.mkdir(`/challenges/${challengeName}/votes`)
        await server.files.mkdir(`/challenges/${challengeName}/videos`)
        await server.files.write(`/challenges/${challengeName}/challenge.json`, forIPFS, {create: true})

        toastSuccess(t('challenge created!'))
        router.push(`challenge/${name.replaceAll(' ', '-')}`)
      } else {
        toastError(t('Error'), t('Unable to sign payload'))
      }
    } catch (error) {
      toastError(t('Error'), (error as Error)?.message)
      // console.error(error)
      setIsLoading(false)
    }

  }else{
         toastError('Errorr', 'You need at least level2 DAO ranking to create challenge');
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
    userVotingLevel()
    if (initialBlock > 0) {
      setState((prevState) => ({
        ...prevState,
        snapshot: initialBlock,
      }))
    }
  }, [initialBlock, setState])


  const userVotingLevel = async() => {

    let amount = await contract.getVoterTotalStakeAmount(account);
    amount = amount / (10**18);
    let level = getLevel(amount);
    setVotingLevel(level);
  }

  const getLevel = (amount) => {
      // console.log(process.env.NEXT_PUBLIC_LEVEL1)
      if(amount >= process.env.NEXT_PUBLIC_LEVEL1 && amount < process.env.NEXT_PUBLIC_LEVEL2){ return 1; }
      if(amount >= process.env.NEXT_PUBLIC_LEVEL2 && amount < process.env.NEXT_PUBLIC_LEVEL3){ return 2; }
      if(amount >= process.env.NEXT_PUBLIC_LEVEL3){ return 3; }
	 }

  return (

    <div className={`${biggerThan1400 && "container"} ${biggest1400 && "container-fluid"}`} >
            <p className='p-2'><i className="fa-solid fa-arrow-left"></i>  <Link href='/xgame'> Back </Link> </p>
          <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-7">
            <div className="card">
              <div className=" border-0 p-2 ">
                <h1 className="fs-18">Create Challenge</h1>
              </div>
              <div className="card-body">
             
                  <div className="row mb-3">
                    <input id="name" type="text" name="name" value={name} className="input1" placeholder="Challenge Title" onChange={handleChange} required />
                    <label className="mx-3">
                      {formErrors.name && fieldsState.name && <FormErrors errors={formErrors.name} />}
                    </label>
                  </div>
                  <div className="row">
                    <div className='m-3' style={{ width: "-webkit-fill-available" }}>
                      {/* @ts-ignore */}
                      <EasyMde
                        id="body"
                        name="body"
                        onTextChange={handleEasyMdeChange}
                        value={body}
                        options={options}
                        required
                      />
                      {/* <MDEditor height={200} value={value} onChange={setValue} /> */}
                      {formErrors.body && fieldsState.body && <FormErrors errors={formErrors.body} />}
                    </div>

                  </div>

              </div>
            </div>
          </div>
          <div className="col-xl-5">
          <div className='card'>
          <div className=" border-0 p-2 ">
                <h1 className="fs-18">Rules</h1>
              </div>
              <div>
              <div className='card-body mx-3'>
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
                      <div className="text-center">

                         {votingLevel < 2 &&
                               <p className='mt-2 text-danger'>
                                  You need at least level2 DAO ranking to create challenge
                              </p>
                         }
                          
                          {/* <a className='p-2 mt-3' type="a" onClick={onPresentVoteDetailsModal} >
                             {t('Check voting power')}
                          </a> */}
                      </div>
                    
                    </>
                  ) : (
                    <ConnectWalletButton width="100%" type="button" />
                  )}

              </div>
            </div>
           
            </div>
          </div>
          
        </div>
        </form>
      </div>
  )
}

export default CreateChallenge
