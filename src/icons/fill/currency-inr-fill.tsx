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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.25,64H176a8,8,0,0,1,0,16H160a48.05,48.05,0,0,1-48,48h-2.71l48,42a8,8,0,0,1-10.54,12l-64-56A8,8,0,0,1,88,136h24a32,32,0,0,0,32-32H88a8,8,0,0,1,0-16h51.69A32,32,0,0,0,112,72H88a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16H147.74A48.15,48.15,0,0,1,157.25,88Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyInrFill'

export const CurrencyInrFill = memo<IconProps>(themed(Icon))
