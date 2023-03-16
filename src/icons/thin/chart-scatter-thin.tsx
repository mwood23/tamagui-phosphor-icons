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
      <_Polyline
        points="224 208 32 208 32 48"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Circle cx="132" cy="148" r="8" fill={`${color}`} />
      <_Circle cx="108" cy="92" r="8" fill={`${color}`} />
      <_Circle cx="76" cy="164" r="8" fill={`${color}`} />
      <_Circle cx="172" cy="116" r="8" fill={`${color}`} />
      <_Circle cx="196" cy="76" r="8" fill={`${color}`} />
      <_Circle cx="188" cy="164" r="8" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'ChartScatterThin'

export const ChartScatterThin = memo<IconProps>(themed(Icon))
