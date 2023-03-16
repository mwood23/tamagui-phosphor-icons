import { useContext } from 'react'

import { DotOutlineBold } from '../bold/dot-outline-bold'
import { DotOutlineDuotone } from '../duotone/dot-outline-duotone'
import { DotOutlineFill } from '../fill/dot-outline-fill'
import { DotOutlineLight } from '../light/dot-outline-light'
import { DotOutlineRegular } from '../regular/dot-outline-regular'
import { DotOutlineThin } from '../thin/dot-outline-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DotOutlineRegular,
  bold: DotOutlineBold,
  duotone: DotOutlineDuotone,
  fill: DotOutlineFill,
  light: DotOutlineLight,
  thin: DotOutlineThin,
} as const

export const DotOutline = (props: IconProps) => {
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
