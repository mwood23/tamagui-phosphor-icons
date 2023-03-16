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
      <_Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-4.78,91.44c-16.68,35-31.06,50.56-46.65,50.56-19.68,0-31.39-24.56-43.79-50.56C112,113,101,90,91.43,90c-3.74,0-14.37,4-32.21,41.44a8,8,0,0,1-14.44-6.88C61.46,89.59,75.84,74,91.43,74c19.68,0,31.39,24.56,43.79,50.56C144,143,155,166,164.57,166c3.74,0,14.37-4,32.21-41.44a8,8,0,1,1,14.44,6.88Z" />
    </_Svg>
  )
}

Icon.displayName = 'WaveSineFill'

export const WaveSineFill = memo<IconProps>(themed(Icon))
