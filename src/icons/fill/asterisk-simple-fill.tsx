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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm59.15,87.35L141,131.12l33.13,39.76a8,8,0,0,1-12.3,10.24L128,140.5,94.15,181.12a8,8,0,0,1-12.3-10.24L115,131.12,68.85,111.35a8,8,0,1,1,6.3-14.7L120,115.87V70a8,8,0,0,1,16,0v45.87l44.85-19.22a8,8,0,1,1,6.3,14.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'AsteriskSimpleFill'

export const AsteriskSimpleFill = memo<IconProps>(themed(Icon))
