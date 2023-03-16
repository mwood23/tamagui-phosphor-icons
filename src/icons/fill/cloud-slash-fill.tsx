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
      <_Path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L81.32,88.55l-.06.12A64,64,0,1,0,72,216h88a87.34,87.34,0,0,0,31.8-5.93l10.28,11.31a8,8,0,1,0,11.84-10.76Z" />
      <_Path d="M160,40a87.35,87.35,0,0,0-52.11,17.08,8,8,0,0,0-1.18,11.83L213.76,186.66a8,8,0,0,0,5.92,2.62h0a8,8,0,0,0,5.94-2.67A88,88,0,0,0,160,40Z" />
    </_Svg>
  )
}

Icon.displayName = 'CloudSlashFill'

export const CloudSlashFill = memo<IconProps>(themed(Icon))
