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
      <_Rect
        x="100.24"
        y="32.24"
        width="55.51"
        height="55.51"
        rx="7.85"
        transform="translate(-4.94 108.08) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Rect
        x="168.24"
        y="100.24"
        width="55.51"
        height="55.51"
        rx="7.85"
        transform="translate(-33.1 176.08) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Rect
        x="32.24"
        y="100.24"
        width="55.51"
        height="55.51"
        rx="7.85"
        transform="translate(-72.94 79.92) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Rect
        x="100.24"
        y="168.24"
        width="55.51"
        height="55.51"
        rx="7.85"
        transform="translate(-101.1 147.92) rotate(-45)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'DiamondsFourBold'

export const DiamondsFourBold = memo<IconProps>(themed(Icon))
