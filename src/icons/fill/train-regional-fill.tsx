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
      <_Path d="M168,88a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,88Zm55.72,34.1-22.39,82.11A16,16,0,0,1,185.89,216H176l14.4,19.2a8,8,0,1,1-12.8,9.6L156,216H100L78.4,244.8a8,8,0,1,1-12.8-9.6L80,216H70.11a16,16,0,0,1-15.44-11.79L32.28,122.1a8.08,8.08,0,0,1,0-4.2L54.67,35.79A16,16,0,0,1,70.11,24H185.89a16,16,0,0,1,15.44,11.79l22.39,82.11A8.08,8.08,0,0,1,223.72,122.1ZM136,152a8,8,0,0,0-16,0v40a8,8,0,0,0,16,0Zm70-38.31L185.89,40H70.11L50,113.69l78,14.18Z" />
    </_Svg>
  )
}

Icon.displayName = 'TrainRegionalFill'

export const TrainRegionalFill = memo<IconProps>(themed(Icon))
