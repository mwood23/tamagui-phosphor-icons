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
        d="M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z"
        opacity="0.2"
      />
      <_Line
        x1="56"
        y1="40"
        x2="56"
        y2="216"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'SkipBackDuotone'

export const SkipBackDuotone = memo<IconProps>(themed(Icon))
