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
      <_Rect x="80" y="64" width="96" height="48" opacity="0.2" />
      <_Rect
        x="80"
        y="64"
        width="96"
        height="48"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Rect
        x="32"
        y="48.01"
        width="192"
        height="160"
        rx="8"
        transform="translate(256.01 0.01) rotate(90)"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="88" cy="148" r="12" fill={`${color}`} />
      <_Circle cx="128" cy="148" r="12" fill={`${color}`} />
      <_Circle cx="168" cy="148" r="12" fill={`${color}`} />
      <_Circle cx="88" cy="188" r="12" fill={`${color}`} />
      <_Circle cx="128" cy="188" r="12" fill={`${color}`} />
      <_Circle cx="168" cy="188" r="12" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'CalculatorDuotone'

export const CalculatorDuotone = memo<IconProps>(themed(Icon))
