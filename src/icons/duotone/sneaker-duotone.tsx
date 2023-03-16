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
        d="M248,167.06a32,32,0,0,0-21.88-30.35l-60.73-20.25A32,32,0,0,1,146.27,99.1L123,44.75a8,8,0,0,0-10-4.27L37.27,68A8,8,0,0,0,32,75.54V168H248Z"
        opacity="0.2"
      />
      <_Path
        d="M32,192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V167.06a32,32,0,0,0-21.88-30.35l-60.73-20.25A32,32,0,0,1,146.27,99.1L123,44.75a8,8,0,0,0-10-4.27L37.27,68A8,8,0,0,0,32,75.54Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="32"
        y1="168"
        x2="248"
        y2="168"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="120"
        y1="104"
        x2="144.55"
        y2="95.07"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="104"
        y1="80"
        x2="133.51"
        y2="69.27"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="136"
        y1="128"
        x2="166.61"
        y2="116.87"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'SneakerDuotone'

export const SneakerDuotone = memo<IconProps>(themed(Icon))
