import { useContext } from 'react'

import { LightningABold } from '../bold/lightning-a-bold'
import { LightningADuotone } from '../duotone/lightning-a-duotone'
import { LightningAFill } from '../fill/lightning-a-fill'
import { LightningALight } from '../light/lightning-a-light'
import { LightningARegular } from '../regular/lightning-a-regular'
import { LightningAThin } from '../thin/lightning-a-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: LightningARegular,
  bold: LightningABold,
  duotone: LightningADuotone,
  fill: LightningAFill,
  light: LightningALight,
  thin: LightningAThin,
} as const

export const LightningA = (props: IconProps) => {
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
