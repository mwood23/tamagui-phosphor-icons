import { useContext } from 'react'

import { SubtitlesBold } from '../bold/subtitles-bold'
import { SubtitlesDuotone } from '../duotone/subtitles-duotone'
import { SubtitlesFill } from '../fill/subtitles-fill'
import { SubtitlesLight } from '../light/subtitles-light'
import { SubtitlesRegular } from '../regular/subtitles-regular'
import { SubtitlesThin } from '../thin/subtitles-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SubtitlesRegular,
  bold: SubtitlesBold,
  duotone: SubtitlesDuotone,
  fill: SubtitlesFill,
  light: SubtitlesLight,
  thin: SubtitlesThin,
} as const

export const Subtitles = (props: IconProps) => {
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
