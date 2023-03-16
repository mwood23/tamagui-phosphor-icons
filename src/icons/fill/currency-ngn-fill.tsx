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
      <_Path d="M88,93.63,110.61,120H88Zm80,68.74V136H145.39ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-32,0a8,8,0,0,0-8-8h-8V72a8,8,0,0,0-16,0v48H131.68L86.07,66.79A8,8,0,0,0,72,72v48H64a8,8,0,0,0,0,16h8v48a8,8,0,0,0,16,0V136h36.32l45.61,53.21A8,8,0,0,0,176,192a8,8,0,0,0,8-8V136h8A8,8,0,0,0,200,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyNgnFill'

export const CurrencyNgnFill = memo<IconProps>(themed(Icon))
