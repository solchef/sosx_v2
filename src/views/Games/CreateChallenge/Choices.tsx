import { Button, Card, CardBody, CardHeader, Heading } from '@pancakeswap/uikit'
import uniqueId from 'lodash/uniqueId'
import { useTranslation } from 'contexts/Localization'
import Choice from './Choice'

export interface Choice {
  id: string
  value: string
}

interface ChoicesProps {
  choices: Choice[]
  onChange: (newChoices: Choice[]) => void
}

export const MINIMUM_CHOICES = 2
export const makeChoice = (): Choice => ({ id: uniqueId(), value: '' })

const Choices: React.FC<ChoicesProps> = ({ choices, onChange }) => {
  const { t } = useTranslation()
  const hasMinimumChoices = choices.filter((choice) => choice.value.length > 0).length >= MINIMUM_CHOICES

  const addChoice = () => {
    onChange([...choices, makeChoice()])
  }

  return (

    <>

      <h4 className="p-2">Rules</h4>
      <div className="row">
        <div className="input-group col-9">
          {choices.map(({ id, value }, index) => {
            const handleTextInput = (newValue: string) => {
              const newChoices = [...choices]
              const choiceIndex = newChoices.findIndex((newChoice) => newChoice.id === id)

              newChoices[choiceIndex].value = newValue

              onChange(newChoices)
            }

            const handleRemove = () => {
              onChange(choices.filter((newPrevChoice) => newPrevChoice.id !== id))
            }

            return (
              <Choice
                key={id}
                scale="lg"
                onTextInput={handleTextInput}
                placeholder={t('Input choice text')}
                value={value}
                onRemove={index > 1 ? handleRemove : undefined}
              />
            )
          })}



        </div>
        <div className="input-group-btn col-3">
          <button onClick={addChoice} disabled={!hasMinimumChoices} type="button" className="btn btn-primary" ng-click="addArtistChoice()"><span
            className="glyphicon glyphicon-plus mb-3"></span> <i
              className="fa fa-plus mr-1"></i>Add Rule</button>
        </div>

      </div>


    </>
  )
}

export default Choices
