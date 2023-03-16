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
      <_Path
        d="M32,88a8,8,0,0,0-7.93,9c3.07,23,11.13,83.48,13.87,104A8,8,0,0,0,45.87,208H210.13a8,8,0,0,0,7.93-6.94l13.87-104A8,8,0,0,0,224,88Z"
        opacity="0.2"
      />
      <_Line
        x1="128"
        y1="120"
        x2="128"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Polyline
        points="184 88 128 24 72 88"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M32,88a8,8,0,0,0-7.93,9c3.07,23,11.13,83.48,13.87,104A8,8,0,0,0,45.87,208H210.13a8,8,0,0,0,7.93-6.94l13.87-104A8,8,0,0,0,224,88Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="180.8"
        y1="120"
        x2="175.2"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="75.2"
        y1="120"
        x2="80.8"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'BasketDuotone'

export const BasketDuotone = memo<IconProps>(themed(Icon))
