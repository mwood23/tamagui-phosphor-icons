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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,80a8,8,0,0,1,0,16H88v16h32a8,8,0,0,1,0,16H89.89a44.25,44.25,0,0,0,72.6,18.74,8,8,0,1,1,11,11.6A60.22,60.22,0,0,1,73.36,152H64a8,8,0,0,1,0-16h8V120H64a8,8,0,0,1,0-16h9.12A60.21,60.21,0,0,1,173.51,72.52a8,8,0,1,1-11,11.6A44.24,44.24,0,0,0,89.56,104Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyEurFill'

export const CurrencyEurFill = memo<IconProps>(themed(Icon))
