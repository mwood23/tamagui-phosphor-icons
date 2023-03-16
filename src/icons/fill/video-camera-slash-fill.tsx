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
      <_Path d="M213.92,210.62a8,8,0,1,1-11.84,10.76L182.64,200H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H51.73L42.08,45.38A8,8,0,1,1,53.92,34.62ZM251.77,73a8,8,0,0,0-8.21.39l-32,21.34a8,8,0,0,0-3.56,6.65v53.34a8,8,0,0,0,3.56,6.65l32,21.34A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73Zm-73.69,74.46A8,8,0,0,0,192,142V72a16,16,0,0,0-16-16H113.06a8,8,0,0,0-5.92,13.38Z" />
    </_Svg>
  )
}

Icon.displayName = 'VideoCameraSlashFill'

export const VideoCameraSlashFill = memo<IconProps>(themed(Icon))
