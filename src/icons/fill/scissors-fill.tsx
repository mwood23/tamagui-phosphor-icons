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
      <_Path d="M157.73,113.13A8,8,0,0,1,159.82,102l67.66-46.3a8,8,0,0,1,9,13.21l-67.67,46.3a8,8,0,0,1-11.12-2.09ZM238.6,198.2a8,8,0,0,1-11.12,2.09L136,137.69,93.48,166.78a36,36,0,1,1-9-13.2L121.83,128,84.45,102.42a36,36,0,1,1,9-13.2l143,97.86A8,8,0,0,1,238.6,198.2ZM72,180a12,12,0,1,0-12,12A12,12,0,0,0,72,180ZM72,76A12,12,0,1,0,60,88,12,12,0,0,0,72,76Z" />
    </_Svg>
  )
}

Icon.displayName = 'ScissorsFill'

export const ScissorsFill = memo<IconProps>(themed(Icon))
