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
      <_Path d="M247.37,89.15l-37,113.33a8,8,0,0,1-11.71,4.39c-.23-.14-25.8-14.87-70.68-14.87s-70.45,14.73-70.7,14.88a8,8,0,0,1-11.68-4.4L8.62,89.12A12.11,12.11,0,0,1,25.52,74.5l50.19,25,41.92-69.66a12.11,12.11,0,0,1,20.74,0l41.92,69.66,50.21-25a12.1,12.1,0,0,1,16.87,14.66Z" />
    </_Svg>
  )
}

Icon.displayName = 'CrownSimpleFill'

export const CrownSimpleFill = memo<IconProps>(themed(Icon))
