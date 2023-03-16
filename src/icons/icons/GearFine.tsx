import { useContext } from 'react'

import { GearFineBold } from '../bold/gear-fine-bold'
import { GearFineDuotone } from '../duotone/gear-fine-duotone'
import { GearFineFill } from '../fill/gear-fine-fill'
import { GearFineLight } from '../light/gear-fine-light'
import { GearFineRegular } from '../regular/gear-fine-regular'
import { GearFineThin } from '../thin/gear-fine-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GearFineRegular,
  bold: GearFineBold,
  duotone: GearFineDuotone,
  fill: GearFineFill,
  light: GearFineLight,
  thin: GearFineThin,
} as const

export const GearFine = (props: IconProps) => {
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
