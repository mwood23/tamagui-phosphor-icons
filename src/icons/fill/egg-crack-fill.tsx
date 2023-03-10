import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Circle as _Circle,
  Defs as _Defs,
  Ellipse as _Ellipse,
  G as _G,
  Line as _Line,
  LinearGradient as _LinearGradient,
  Path as _Path,
  Polygon as _Polygon,
  Polyline as _Polyline,
  RadialGradient as _RadialGradient,
  Rect as _Rect,
  Stop as _Stop,
  Svg as _Svg,
  Symbol as _Symbol,
  Text as _Text,
  Use as _Use,
} from 'react-native-svg'

import { themed } from '../../themed'
import { IconProps } from '../icons/IconProps'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <_Svg
      viewBox="0 0 256 256"
      {...otherProps}
      height={size}
      width={size}
      fill={`${color}`}
    >
      <_Rect width="256" height="256" fill="none" />
      <_Path d="M186.7,59.6l-.7-1.1a4.1,4.1,0,0,0-6.3-.4L143.5,98.4l18,7a8.1,8.1,0,0,1,5,9l-7.2,37.1a8.1,8.1,0,0,1-7.9,6.5h-1.5a8.4,8.4,0,0,1-6.3-9.7l5.9-30.3-22.6-8.7a8.3,8.3,0,0,1-4.9-5.6,8.1,8.1,0,0,1,1.8-7.2l46.6-51.9a4,4,0,0,0-.1-5.5c-14.1-14.7-29-23-42.3-23-18.5,0-40.5,16.3-58.7,43.6s-28,57.6-29.2,86.8C38,197,77.6,240.1,128.2,240A88.1,88.1,0,0,0,216,152C216,121.2,205.3,87.5,186.7,59.6Z" />
    </_Svg>
  )
}

Icon.displayName = 'EggCrackFill'

export const EggCrackFill = memo<IconProps>(themed(Icon))
