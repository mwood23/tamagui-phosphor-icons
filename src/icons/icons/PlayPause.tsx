import { useContext } from 'react'

import { PlayPauseBold } from '../bold/play-pause-bold'
import { PlayPauseDuotone } from '../duotone/play-pause-duotone'
import { PlayPauseFill } from '../fill/play-pause-fill'
import { PlayPauseLight } from '../light/play-pause-light'
import { PlayPauseRegular } from '../regular/play-pause-regular'
import { PlayPauseThin } from '../thin/play-pause-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PlayPauseRegular,
  bold: PlayPauseBold,
  duotone: PlayPauseDuotone,
  fill: PlayPauseFill,
  light: PlayPauseLight,
  thin: PlayPauseThin,
} as const

export const PlayPause = (props: IconProps) => {
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
