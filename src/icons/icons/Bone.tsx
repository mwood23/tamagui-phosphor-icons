import { useContext } from 'react'

import { BoneBold } from '../bold/bone-bold'
import { BoneDuotone } from '../duotone/bone-duotone'
import { BoneFill } from '../fill/bone-fill'
import { BoneLight } from '../light/bone-light'
import { BoneRegular } from '../regular/bone-regular'
import { BoneThin } from '../thin/bone-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BoneRegular,
  bold: BoneBold,
  duotone: BoneDuotone,
  fill: BoneFill,
  light: BoneLight,
  thin: BoneThin,
} as const

export const Bone = (props: IconProps) => {
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
