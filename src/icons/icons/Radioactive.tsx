import { useContext } from 'react'

import { RadioactiveBold } from '../bold/radioactive-bold'
import { RadioactiveDuotone } from '../duotone/radioactive-duotone'
import { RadioactiveFill } from '../fill/radioactive-fill'
import { RadioactiveLight } from '../light/radioactive-light'
import { RadioactiveRegular } from '../regular/radioactive-regular'
import { RadioactiveThin } from '../thin/radioactive-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: RadioactiveRegular,
  bold: RadioactiveBold,
  duotone: RadioactiveDuotone,
  fill: RadioactiveFill,
  light: RadioactiveLight,
  thin: RadioactiveThin,
} as const

export const Radioactive = (props: IconProps) => {
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
