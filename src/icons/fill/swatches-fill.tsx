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
      <_Path d="M232,155.91a16,16,0,0,0-1-5.22L211.94,98.48A16,16,0,0,0,191.49,89l-67.81,24.57,12.08-69A16,16,0,0,0,122.84,26L68.17,16.25a15.94,15.94,0,0,0-18.47,13l-25,143.12A43.82,43.82,0,0,0,67.78,224H216a16,16,0,0,0,16-16ZM68,196a16,16,0,1,1,16-16A16,16,0,0,1,68,196Zm42.72-8.38,9.78-55.92L196.92,104,216,156.11,108.78,195A44.89,44.89,0,0,0,110.72,187.62ZM216,208H119.74L216,173.11Z" />
    </_Svg>
  )
}

Icon.displayName = 'SwatchesFill'

export const SwatchesFill = memo<IconProps>(themed(Icon))
