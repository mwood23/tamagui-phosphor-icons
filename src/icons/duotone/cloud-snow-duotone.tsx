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
        d="M156,24A68.16,68.16,0,0,0,90.19,74.45v-.11A44,44,0,1,0,76,160h80a68,68,0,0,0,0-136Z"
        opacity="0.2"
      />
      <_Circle cx="76" cy="196" r="12" fill={`${color}`} />
      <_Circle cx="116" cy="212" r="12" fill={`${color}`} />
      <_Circle cx="164" cy="196" r="12" fill={`${color}`} />
      <_Circle cx="68" cy="236" r="12" fill={`${color}`} />
      <_Circle cx="156" cy="236" r="12" fill={`${color}`} />
      <_Path
        d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'CloudSnowDuotone'

export const CloudSnowDuotone = memo<IconProps>(themed(Icon))
