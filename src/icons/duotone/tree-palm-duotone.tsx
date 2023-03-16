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
        d="M188.92,40a59.29,59.29,0,0,0-43.08,18.75A65.47,65.47,0,0,0,128,104L232,58.75A59.28,59.28,0,0,0,188.92,40Z"
        opacity="0.2"
      />
      <_Path
        d="M176.56,98.18A64.2,64.2,0,0,0,128,104.52L221.81,176a63,63,0,0,0-6.39-48.22A63.73,63.73,0,0,0,176.56,98.18Z"
        opacity="0.2"
      />
      <_Path
        d="M110.16,58.75a58.87,58.87,0,0,0-86.16,0L128,104A65.47,65.47,0,0,0,110.16,58.75Z"
        opacity="0.2"
      />
      <_Path
        d="M79.44,98.18a63.73,63.73,0,0,0-38.86,29.6A63,63,0,0,0,34.19,176L128,104.52A64.2,64.2,0,0,0,79.44,98.18Z"
        opacity="0.2"
      />
      <_Path
        d="M128,104a65.47,65.47,0,0,1,17.84-45.25,58.87,58.87,0,0,1,86.16,0Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M128,104.52a64.26,64.26,0,0,1,87.42,23.26A63,63,0,0,1,221.81,176Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M128,104a65.47,65.47,0,0,0-17.84-45.25,58.87,58.87,0,0,0-86.16,0Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M128,104.52a64.26,64.26,0,0,0-87.42,23.26A63,63,0,0,0,34.19,176Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="128"
        y1="104.52"
        x2="128"
        y2="224"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'TreePalmDuotone'

export const TreePalmDuotone = memo<IconProps>(themed(Icon))
