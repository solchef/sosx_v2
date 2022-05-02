import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { Box, CloseIcon, IconButton, Input, InputProps } from '@pancakeswap/uikit'

interface ChoiceProps extends InputProps, InputHTMLAttributes<HTMLInputElement> {
  onTextInput: (value: string) => void
  onRemove?: () => void
}

const Choice: React.FC<ChoiceProps> = ({ onRemove, onTextInput, ...props }) => {
  const [isWarning, setIsWarning] = useState(false)
  const [isDirty, setIsDirty] = useState(false)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget

    setIsWarning(isDirty && value.length === 0)
    setIsDirty(true)
    onTextInput(value)
  }

  return (
    <div className='d-flex w-100' > 
      <input  id="rulename" onChange={handleChange} type="text" ng-modal="artist1"  className="inputrule mb-3 "
                          placeholder="Enter Rule" />
      {onRemove && (
        <div >
          <IconButton variant="text" onClick={onRemove}>
            <CloseIcon />
          </IconButton>
        </div>
      )}
    </div>

    // <input {...props} id="rulename" onChange={handleChange} type="text"  isWarning={isWarning} className="inputrule mb-3"
    // placeholder="Enter Rule" />
  )
}

export default Choice
