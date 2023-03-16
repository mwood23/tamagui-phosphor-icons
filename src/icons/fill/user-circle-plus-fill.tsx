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
      <_Path d="M128,76a44,44,0,1,1-44,44A44,44,0,0,1,128,76Zm48-12h16V80a8,8,0,0,0,16,0V64h16a8,8,0,0,0,0-16H208V32a8,8,0,0,0-16,0V48H176a8,8,0,0,0,0,16Zm45.35,40.11a8,8,0,0,0-6.57,9.21A88.85,88.85,0,0,1,216,128a87.62,87.62,0,0,1-22.24,58.41A79.86,79.86,0,0,0,172,165.1a4,4,0,0,0-4.84.32,59.81,59.81,0,0,1-78.27,0A4,4,0,0,0,84,165.1a79.71,79.71,0,0,0-21.79,21.31A88,88,0,0,1,128,40a88.76,88.76,0,0,1,14.68,1.22,8,8,0,0,0,2.64-15.78,103.92,103.92,0,1,0,85.24,85.24A8,8,0,0,0,221.35,104.11Z" />
    </_Svg>
  )
}

Icon.displayName = 'UserCirclePlusFill'

export const UserCirclePlusFill = memo<IconProps>(themed(Icon))
