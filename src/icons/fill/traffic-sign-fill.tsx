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
      <_Path d="M243.15,116.29,139.71,12.85a16.56,16.56,0,0,0-23.42,0L12.85,116.29a16.56,16.56,0,0,0,0,23.42L116.29,243.15h0a16.56,16.56,0,0,0,23.42,0L243.15,139.71a16.56,16.56,0,0,0,0-23.42Zm-69.49,9.37-24,24a8,8,0,0,1-11.32-11.32L148.69,128H112a16,16,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32,32,0,0,1,32-32h36.69l-10.35-10.34a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,173.66,125.66Z" />
    </_Svg>
  )
}

Icon.displayName = 'TrafficSignFill'

export const TrafficSignFill = memo<IconProps>(themed(Icon))
