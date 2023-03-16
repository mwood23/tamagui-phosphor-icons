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
      <_Path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40ZM93.66,181.66a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,93.66,181.66Zm120,0a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,213.66,181.66Z" />
    </_Svg>
  )
}

Icon.displayName = 'SunglassesFill'

export const SunglassesFill = memo<IconProps>(themed(Icon))
