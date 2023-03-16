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
        d="M168.8,27.14,184,62.57a5.21,5.21,0,0,0,4.36,3.12L227.23,69a5.12,5.12,0,0,1,3,9L200.7,103.17a5.09,5.09,0,0,0-1.66,5l8.84,37.46a5.2,5.2,0,0,1-7.77,5.57l-33.42-19.87a5.29,5.29,0,0,0-5.38,0l-33.42,19.87a5.2,5.2,0,0,1-7.77-5.57L129,108.22a5.09,5.09,0,0,0-1.66-5L97.81,78a5.12,5.12,0,0,1,3-9l38.88-3.29A5.21,5.21,0,0,0,144,62.57L159.2,27.14A5.24,5.24,0,0,1,168.8,27.14Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="76"
        y1="124"
        x2="24"
        y2="176"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="92"
        y1="180"
        x2="40"
        y2="232"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="164"
        y1="180"
        x2="112"
        y2="232"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'ShootingStarBold'

export const ShootingStarBold = memo<IconProps>(themed(Icon))
