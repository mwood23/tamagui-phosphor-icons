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
      <_Path d="M232,64V192a16,16,0,0,1-16,16H82.5L50.42,236.11a.69.69,0,0,1-.13.11A15.89,15.89,0,0,1,40,240a16.05,16.05,0,0,1-6.79-1.52A15.84,15.84,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChatFill'

export const ChatFill = memo<IconProps>(themed(Icon))
