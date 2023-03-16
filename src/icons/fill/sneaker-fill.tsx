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
      <_Path d="M228.65,129.11l-28.06-9.35a4,4,0,0,0-2.63,0l-43.23,15.72A8.14,8.14,0,0,1,152,136a8,8,0,0,1-7.71-5.88,8.17,8.17,0,0,1,5.22-9.73L168,113.67a2.54,2.54,0,0,0-.06-4.8,23.93,23.93,0,0,1-8.8-5.25,4,4,0,0,0-4.17-.91l-24.22,8.8a8,8,0,0,1-10.44-5.39,8.17,8.17,0,0,1,5.22-9.73L146,88.93a4,4,0,0,0,2.31-5.34l-3.06-7.16a4,4,0,0,0-5.05-2.19l-25.5,9.27a8,8,0,0,1-10.44-5.39,8.17,8.17,0,0,1,5.22-9.73l24-8.73a4,4,0,0,0,2.31-5.33L130.39,41.6s0-.07,0-.1A16,16,0,0,0,110.25,33L34.53,60.49A16.05,16.05,0,0,0,24,75.53V192a16,16,0,0,0,16,16H240a16,16,0,0,0,16-16V167.06A40,40,0,0,0,228.65,129.11ZM240,192H40V176H240Z" />
    </_Svg>
  )
}

Icon.displayName = 'SneakerFill'

export const SneakerFill = memo<IconProps>(themed(Icon))