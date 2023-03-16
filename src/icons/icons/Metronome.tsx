import { useContext } from 'react'

import { MetronomeBold } from '../bold/metronome-bold'
import { MetronomeDuotone } from '../duotone/metronome-duotone'
import { MetronomeFill } from '../fill/metronome-fill'
import { MetronomeLight } from '../light/metronome-light'
import { MetronomeRegular } from '../regular/metronome-regular'
import { MetronomeThin } from '../thin/metronome-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MetronomeRegular,
  bold: MetronomeBold,
  duotone: MetronomeDuotone,
  fill: MetronomeFill,
  light: MetronomeLight,
  thin: MetronomeThin,
} as const

export const Metronome = (props: IconProps) => {
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
