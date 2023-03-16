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
      <_Path d="M224,112H208V96h16a8,8,0,0,1,0,16ZM32,96a8,8,0,0,0,0,16H48V96Zm176,56c0,2.7-.14,5.37-.4,8H224a8,8,0,0,1,0,16H204.32a80,80,0,0,1-152.64,0H32a8,8,0,0,1,0-16H48.4c-.26-2.63-.4-5.3-.4-8v-8H32a8,8,0,0,1,0-16H48V112H208v16h16a8,8,0,0,1,0,16H208Zm-72-16a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0ZM69.84,49.15A79.76,79.76,0,0,0,48.4,96H207.6a79.76,79.76,0,0,0-21.44-46.85l19.5-19.49a8,8,0,1,0-11.32-11.32l-20.29,20.3a79.74,79.74,0,0,0-92.1,0L61.66,18.34A8,8,0,0,0,50.34,29.66Z" />
    </_Svg>
  )
}

Icon.displayName = 'BugBeetleFill'

export const BugBeetleFill = memo<IconProps>(themed(Icon))
