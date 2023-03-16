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
      <_Line
        x1="96"
        y1="96"
        x2="160"
        y2="96"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Line
        x1="96"
        y1="128"
        x2="160"
        y2="128"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Line
        x1="96"
        y1="160"
        x2="128"
        y2="160"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Path
        d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Polyline
        points="215.28 159.99 160 159.99 160 215.27"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </_Svg>
  )
}

Icon.displayName = 'NoteThin'

export const NoteThin = memo<IconProps>(themed(Icon))
