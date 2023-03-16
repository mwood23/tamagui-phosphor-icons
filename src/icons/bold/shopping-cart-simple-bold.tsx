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
      <_Circle cx="80" cy="216" r="20" fill={`${color}`} />
      <_Circle cx="184" cy="216" r="20" fill={`${color}`} />
      <_Path
        d="M42.29,72H224l-27.29,88.71A16,16,0,0,1,181.41,172H82.93a16,16,0,0,1-15.39-11.6l-35-122.6A8,8,0,0,0,24.82,32H12"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'ShoppingCartSimpleBold'

export const ShoppingCartSimpleBold = memo<IconProps>(themed(Icon))
