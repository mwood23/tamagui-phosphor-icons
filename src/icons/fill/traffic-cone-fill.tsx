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
      <_Path d="M232,208H213.69L153.42,34.75A16,16,0,0,0,138.31,24H117.69a16,16,0,0,0-15.11,10.74L42.31,208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM95.43,104h65.14l16.7,48H78.73Z" />
    </_Svg>
  )
}

Icon.displayName = 'TrafficConeFill'

export const TrafficConeFill = memo<IconProps>(themed(Icon))
