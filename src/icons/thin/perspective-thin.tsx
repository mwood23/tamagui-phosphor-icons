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
        d="M216,208a8,8,0,0,1-9.43,7.87l-160-29.09A8,8,0,0,1,40,178.91V77.09a8,8,0,0,1,6.57-7.87l160-29.09A8,8,0,0,1,216,48Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Line
        x1="16"
        y1="128"
        x2="240"
        y2="128"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </_Svg>
  )
}

Icon.displayName = 'PerspectiveThin'

export const PerspectiveThin = memo<IconProps>(themed(Icon))
