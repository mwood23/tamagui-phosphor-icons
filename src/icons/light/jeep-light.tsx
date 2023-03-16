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
        d="M224,176v32a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M72,176v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="16"
        y1="104"
        x2="240"
        y2="104"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="144"
        y1="136"
        x2="144"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Line
        x1="112"
        y1="136"
        x2="112"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M224,176H32V104L42.64,54.32A8,8,0,0,1,50.47,48H205.53a8,8,0,0,1,7.83,6.32L224,104Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Circle cx="68" cy="140" r="10" fill={`${color}`} />
      <_Circle cx="188" cy="140" r="10" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'JeepLight'

export const JeepLight = memo<IconProps>(themed(Icon))
