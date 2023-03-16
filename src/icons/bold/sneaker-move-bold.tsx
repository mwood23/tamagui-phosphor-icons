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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Path
        d="M120.07,39.85a8,8,0,0,0-2.32-5.28l-8.23-8.23a8,8,0,0,0-11.17-.13l-64,64.13a8,8,0,0,0,0,11.32l107.32,104a8,8,0,0,0,5.65,2.34H236a8,8,0,0,0,8-8v-8a32,32,0,0,0-32-32h0a36,36,0,0,1-36-36V95.68a8.18,8.18,0,0,0-7.41-8C141.35,85.45,121.43,67.39,120.07,39.85Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="148"
        y1="120"
        x2="176"
        y2="120"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="28"
        y1="172"
        x2="52"
        y2="172"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="44"
        y1="208"
        x2="92"
        y2="208"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="156"
        y1="156"
        x2="195.49"
        y2="156"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'SneakerMoveBold'

export const SneakerMoveBold = memo<IconProps>(themed(Icon))
