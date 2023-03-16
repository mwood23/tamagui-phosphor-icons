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
        d="M128,120a159.27,159.27,0,0,0-96,32v32a16,16,0,0,0,25.48,12.88C73.47,185.26,97,176,128,176s54.53,9.26,70.52,20.88A16,16,0,0,0,224,184V152A159.27,159.27,0,0,0,128,120Z"
        opacity="0.2"
      />
      <_Path
        d="M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M32,152a160,160,0,0,1,192,0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'BaseballCapDuotone'

export const BaseballCapDuotone = memo<IconProps>(themed(Icon))
