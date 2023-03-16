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
      <_Path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM230.44,67.25A8,8,0,0,0,224,64H48.32L40.21,35.6A16.08,16.08,0,0,0,24.82,24H8A8,8,0,0,0,8,40H24.82L61,166.59A24.11,24.11,0,0,0,84.07,184h96.11a23.89,23.89,0,0,0,22.94-16.94l28.53-92.71A8,8,0,0,0,230.44,67.25Z" />
    </_Svg>
  )
}

Icon.displayName = 'ShoppingCartSimpleFill'

export const ShoppingCartSimpleFill = memo<IconProps>(themed(Icon))
