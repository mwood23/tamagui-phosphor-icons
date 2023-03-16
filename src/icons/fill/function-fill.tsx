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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,72H159.92a16,16,0,0,0-15.73,13l-6.55,35H168a8,8,0,0,1,0,16H134.64l-7.11,37.9A32,32,0,0,1,96.08,200H80a8,8,0,0,1,0-16H96.08A16,16,0,0,0,111.81,171L118.36,136H88a8,8,0,0,1,0-16h33.36l7.11-37.9A32,32,0,0,1,159.92,56H176a8,8,0,0,1,0,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'FunctionFill'

export const FunctionFill = memo<IconProps>(themed(Icon))
