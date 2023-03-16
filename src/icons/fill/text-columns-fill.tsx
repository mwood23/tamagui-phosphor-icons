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
      <_Path d="M120,184v8a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8a8,8,0,0,1,8-8h72A8,8,0,0,1,120,184Zm-8-88H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,112,96Zm0,40H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,112,136Zm0-80H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V64A8,8,0,0,0,112,56ZM216,96H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,96Zm0,80H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,176Zm0-120H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V64A8,8,0,0,0,216,56Zm0,80H144a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,136Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextColumnsFill'

export const TextColumnsFill = memo<IconProps>(themed(Icon))
