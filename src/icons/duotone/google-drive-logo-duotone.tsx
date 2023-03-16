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
        d="M55.12,214.8A7.91,7.91,0,0,1,52.38,212L25.05,164.15A8,8,0,0,1,24,160H88Z"
        opacity="0.2"
      />
      <_Path
        d="M232,160a8,8,0,0,1-1.05,4.15L203.62,212a7.91,7.91,0,0,1-2.74,2.83L168,160Z"
        opacity="0.2"
      />
      <_Path
        d="M96.59,41a8.06,8.06,0,0,1,3.84-1h55.14a8.06,8.06,0,0,1,3.84,1L128,93.33Z"
        opacity="0.2"
      />
      <_Path
        d="M93.65,43.76A8,8,0,0,1,100.43,40h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,212a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,164.15a8,8,0,0,1,.17-8.21Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="55.12"
        y1="214.8"
        x2="159.41"
        y2="40.98"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="200.88"
        y1="214.8"
        x2="96.59"
        y2="40.98"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Line
        x1="24"
        y1="160"
        x2="232"
        y2="160"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'GoogleDriveLogoDuotone'

export const GoogleDriveLogoDuotone = memo<IconProps>(themed(Icon))
