import { useContext } from 'react'

import { VideoBold } from '../bold/video-bold'
import { VideoDuotone } from '../duotone/video-duotone'
import { VideoFill } from '../fill/video-fill'
import { VideoLight } from '../light/video-light'
import { VideoRegular } from '../regular/video-regular'
import { VideoThin } from '../thin/video-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: VideoRegular,
  bold: VideoBold,
  duotone: VideoDuotone,
  fill: VideoFill,
  light: VideoLight,
  thin: VideoThin,
} as const

export const Video = (props: IconProps) => {
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
