import { useContext } from 'react'

import { WaveformBold } from '../bold/waveform-bold'
import { WaveformDuotone } from '../duotone/waveform-duotone'
import { WaveformFill } from '../fill/waveform-fill'
import { WaveformLight } from '../light/waveform-light'
import { WaveformRegular } from '../regular/waveform-regular'
import { WaveformThin } from '../thin/waveform-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: WaveformRegular,
  bold: WaveformBold,
  duotone: WaveformDuotone,
  fill: WaveformFill,
  light: WaveformLight,
  thin: WaveformThin,
} as const

export const Waveform = (props: IconProps) => {
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
