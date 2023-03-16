import { useContext } from 'react'

import { PiggyBankBold } from '../bold/piggy-bank-bold'
import { PiggyBankDuotone } from '../duotone/piggy-bank-duotone'
import { PiggyBankFill } from '../fill/piggy-bank-fill'
import { PiggyBankLight } from '../light/piggy-bank-light'
import { PiggyBankRegular } from '../regular/piggy-bank-regular'
import { PiggyBankThin } from '../thin/piggy-bank-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PiggyBankRegular,
  bold: PiggyBankBold,
  duotone: PiggyBankDuotone,
  fill: PiggyBankFill,
  light: PiggyBankLight,
  thin: PiggyBankThin,
} as const

export const PiggyBank = (props: IconProps) => {
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    style: contextStyle,
  } = useContext(IconContext)

  const {
    color = contextColor ?? 'black',
    size = contextSize ?? 24,
    weight = contextWeight ?? 'regular',
    style = contextStyle ?? {},
    ...otherProps
  } = props

  const Component = weightMap[weight]

  return (
    <Component
      color={color}
      size={size}
      weight={weight}
      style={style}
      {...otherProps}
    />
  )
}
