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
        d="M43.81,223A8,8,0,0,1,33,212.19S64,112,104.4,72.4a56,56,0,0,1,79.2,79.2C144,192,43.81,223,43.81,223Z"
        opacity="0.2"
      />
      <_Line
        x1="224"
        y1="32"
        x2="183.6"
        y2="72.4"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M43.81,223A8,8,0,0,1,33,212.19S64,112,104.4,72.4a56,56,0,0,1,79.2,79.2C144,192,43.81,223,43.81,223Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="232"
        y1="72"
        x2="183.19"
        y2="72"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="184"
        y1="72.81"
        x2="184"
        y2="24"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="112"
        y1="152"
        x2="141.7"
        y2="181.7"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="104.4"
        y1="72.4"
        x2="144"
        y2="112"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'CarrotDuotone'

export const CarrotDuotone = memo<IconProps>(themed(Icon))
