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
      <_Path d="M216,208H115.3l82.4-82.3h0L224,99.3a15.9,15.9,0,0,0,0-22.6L179.3,32a16.1,16.1,0,0,0-22.6,0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16ZM48,163.3l96-96L188.7,112l-96,96H48Z" />
    </_Svg>
  )
}

Icon.displayName = 'PencilSimpleLineFill'

export const PencilSimpleLineFill = memo<IconProps>(themed(Icon))
