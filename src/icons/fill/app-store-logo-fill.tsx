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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM83.66,180.12l-4.8,8a8,8,0,1,1-13.72-8.24l4.8-8a8,8,0,0,1,13.72,8.24ZM128,152H56a8,8,0,0,1,0-16H91.47l27.2-45.33L105.14,68.12a8,8,0,0,1,13.72-8.24L128,75.12l9.14-15.24a8,8,0,0,1,13.72,8.24L110.13,136H128a8,8,0,0,1,0,16Zm72,0H174.13l16.73,27.88a8,8,0,0,1-13.72,8.24l-38.4-64a8,8,0,0,1,13.72-8.24L164.53,136H200a8,8,0,0,1,0,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'AppStoreLogoFill'

export const AppStoreLogoFill = memo<IconProps>(themed(Icon))
