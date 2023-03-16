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
      <_Path d="M224,112v32a8,8,0,0,1-8,8H48v16h88a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H48v8a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v8H168a8,8,0,0,1,8,8V80a8,8,0,0,1-8,8H48v16H216A8,8,0,0,1,224,112Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChartBarHorizontalFill'

export const ChartBarHorizontalFill = memo<IconProps>(themed(Icon))
