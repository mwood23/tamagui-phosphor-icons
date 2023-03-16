import { useContext } from 'react'

import { StethoscopeBold } from '../bold/stethoscope-bold'
import { StethoscopeDuotone } from '../duotone/stethoscope-duotone'
import { StethoscopeFill } from '../fill/stethoscope-fill'
import { StethoscopeLight } from '../light/stethoscope-light'
import { StethoscopeRegular } from '../regular/stethoscope-regular'
import { StethoscopeThin } from '../thin/stethoscope-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: StethoscopeRegular,
  bold: StethoscopeBold,
  duotone: StethoscopeDuotone,
  fill: StethoscopeFill,
  light: StethoscopeLight,
  thin: StethoscopeThin,
} as const

export const Stethoscope = (props: IconProps) => {
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
