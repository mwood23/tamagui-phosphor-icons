import { useContext } from 'react'

import { SpeakerHifiBold } from '../bold/speaker-hifi-bold'
import { SpeakerHifiDuotone } from '../duotone/speaker-hifi-duotone'
import { SpeakerHifiFill } from '../fill/speaker-hifi-fill'
import { SpeakerHifiLight } from '../light/speaker-hifi-light'
import { SpeakerHifiRegular } from '../regular/speaker-hifi-regular'
import { SpeakerHifiThin } from '../thin/speaker-hifi-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SpeakerHifiRegular,
  bold: SpeakerHifiBold,
  duotone: SpeakerHifiDuotone,
  fill: SpeakerHifiFill,
  light: SpeakerHifiLight,
  thin: SpeakerHifiThin,
} as const

export const SpeakerHifi = (props: IconProps) => {
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
