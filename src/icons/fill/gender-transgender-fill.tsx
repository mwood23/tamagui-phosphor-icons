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
      <_Path d="M127.92,150a24,24,0,1,1-22-22A24,24,0,0,1,127.92,150ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM192,72a8,8,0,0,0-8-8H156.27A8.17,8.17,0,0,0,148,71.47,8,8,0,0,0,156,80h8.69L148,96.69,137.66,86.34a8,8,0,0,0-11.49.18,8.22,8.22,0,0,0,.41,11.37L136.69,108,126,118.64A40,40,0,1,0,137.36,130L148,119.31l10.34,10.35a8,8,0,0,0,11.71-.43,8.2,8.2,0,0,0-.6-11.1L159.31,108,176,91.31v8.42a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8Z" />
    </_Svg>
  )
}

Icon.displayName = 'GenderTransgenderFill'

export const GenderTransgenderFill = memo<IconProps>(themed(Icon))
