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
      <_Path d="M255.31,196.75l-64-144A8,8,0,0,0,184,48H72a8,8,0,0,0-7.31,4.75h0l0,.12v0L.69,196.75A8,8,0,0,0,8,208H248a8,8,0,0,0,7.31-11.25ZM64,192H20.31L64,93.7Zm16,0V93.7L123.69,192Z" />
    </_Svg>
  )
}

Icon.displayName = 'TentFill'

export const TentFill = memo<IconProps>(themed(Icon))
