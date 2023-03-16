import { useContext } from 'react'

import { TextBBold } from '../bold/text-b-bold'
import { TextBDuotone } from '../duotone/text-b-duotone'
import { TextBFill } from '../fill/text-b-fill'
import { TextBLight } from '../light/text-b-light'
import { TextBRegular } from '../regular/text-b-regular'
import { TextBThin } from '../thin/text-b-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TextBRegular,
  bold: TextBBold,
  duotone: TextBDuotone,
  fill: TextBFill,
  light: TextBLight,
  thin: TextBThin,
} as const

export const TextB = (props: IconProps) => {
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
