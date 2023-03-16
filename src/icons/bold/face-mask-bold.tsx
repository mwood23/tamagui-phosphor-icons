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
        d="M208,136.15c0,50.95-66.22,68.79-78.17,71.6a8.08,8.08,0,0,1-3.66,0c-12-2.81-78.17-20.65-78.17-71.6V76.9a8,8,0,0,1,5-7.42l72-28.8a7.93,7.93,0,0,1,5.94,0l72,28.8a8,8,0,0,1,5,7.42Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="88"
        y1="100"
        x2="168"
        y2="100"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Line
        x1="88"
        y1="140"
        x2="168"
        y2="140"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M209.41,152H220a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Path
        d="M46.59,152H36a24,24,0,0,1-24-24V104A24,24,0,0,1,36,80h8"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'FaceMaskBold'

export const FaceMaskBold = memo<IconProps>(themed(Icon))
