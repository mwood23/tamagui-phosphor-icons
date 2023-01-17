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

import { IconProps } from '../../IconProps'
import { themed } from '../../themed'

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
      <_Path d="M224,216a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM208,100H153.8L110.9,53.3A3.9,3.9,0,0,0,108,52H91.1a11.6,11.6,0,0,0-9.7,5,11.9,11.9,0,0,0-1.7,10.8L90.5,100H65.9L47.1,77.4A4.1,4.1,0,0,0,44,76H26.8a12.1,12.1,0,0,0-9.7,4.8,11.9,11.9,0,0,0-1.8,10.6l14,46.9A35.8,35.8,0,0,0,63.8,164H240a4,4,0,0,0,4-4V136A36,36,0,0,0,208,100Z" />
    </_Svg>
  )
}

Icon.displayName = 'AirplaneInFlightFill'

export const AirplaneInFlightFill = memo<IconProps>(themed(Icon))