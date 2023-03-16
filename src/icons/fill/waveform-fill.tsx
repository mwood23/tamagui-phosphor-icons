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
      <_Path d="M64,96v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h8A8,8,0,0,1,64,96ZM96,24H88a8,8,0,0,0-8,8V224a8,8,0,0,0,8,8h8a8,8,0,0,0,8-8V32A8,8,0,0,0,96,24Zm40,32h-8a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8h8a8,8,0,0,0,8-8V64A8,8,0,0,0,136,56Zm40,32h-8a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a8,8,0,0,0,8-8V96A8,8,0,0,0,176,88Zm40-16h-8a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h8a8,8,0,0,0,8-8V80A8,8,0,0,0,216,72Z" />
    </_Svg>
  )
}

Icon.displayName = 'WaveformFill'

export const WaveformFill = memo<IconProps>(themed(Icon))
