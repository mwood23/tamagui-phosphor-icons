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
      <_Path d="M231.81,32.19a28,28,0,0,0-39.67.07L18.27,210.6A8,8,0,0,0,22.2,224a154.93,154.93,0,0,0,35,4c33.42,0,66.88-10.88,98.33-32.21,31.75-21.53,50.15-45.85,50.92-46.88a8,8,0,0,0-.74-10.46l-18.74-18.76,45-48A28.08,28.08,0,0,0,231.81,32.19ZM189.22,144.63a225.51,225.51,0,0,1-43.11,38.18c-34.47,23.25-70,32.7-105.84,28.16l106.3-109Z" />
    </_Svg>
  )
}

Icon.displayName = 'KnifeFill'

export const KnifeFill = memo<IconProps>(themed(Icon))
