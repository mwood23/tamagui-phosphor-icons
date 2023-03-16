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
      <_Path d="M208,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,176,80v42.21L136,99.36V72a8,8,0,0,0-16,0V99.36L80,122.21V80A24,24,0,0,0,64,57.38V32a8,8,0,0,0-16,0V57.38A24,24,0,0,0,32,80V216a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V176a16,16,0,0,1,32,0v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V80A24,24,0,0,0,208,57.38ZM64,208H48V112H64Zm144,0H192V112h16Z" />
    </_Svg>
  )
}

Icon.displayName = 'SynagogueFill'

export const SynagogueFill = memo<IconProps>(themed(Icon))
