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
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0C208,144,209,169,161.9,216Z"
        opacity="0.2"
      />
      <_Path
        d="M180,152a20,20,0,0,1-40,0c0-24,28-24,28-48a40,40,0,0,0-80,0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M161.9,216A44,44,0,0,1,84,188c0-41.5-36-28-36-84a80,80,0,0,1,160,0"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'EarDuotone'

export const EarDuotone = memo<IconProps>(themed(Icon))
