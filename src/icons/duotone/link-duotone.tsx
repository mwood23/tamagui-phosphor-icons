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
        d="M209.94,46.06a48,48,0,0,0-67.88,0l-28,28a47.76,47.76,0,0,0-13.48,26.52,47.76,47.76,0,0,0-26.52,13.48l-28,28a48,48,0,0,0,67.88,67.88l28-28a47.76,47.76,0,0,0,13.48-26.52,47.76,47.76,0,0,0,26.52-13.48l28-28A48,48,0,0,0,209.94,46.06Z"
        opacity="0.2"
      />
      <_Path
        d="M131.88,192l-17.94,17.94a48,48,0,0,1-67.88-67.88L74.17,114A48,48,0,0,1,140,112"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M124.12,64l17.94-17.94a48,48,0,0,1,67.88,67.88l-28.11,28.11A48,48,0,0,1,116,144"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'LinkDuotone'

export const LinkDuotone = memo<IconProps>(themed(Icon))
