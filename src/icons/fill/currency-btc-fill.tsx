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
      <_Path d="M168,152a24,24,0,0,1-24,24H104V128h40A24,24,0,0,1,168,152Zm64-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48,24a40,40,0,0,0-17.63-33.15A32,32,0,0,0,152,65V56a8,8,0,0,0-16,0v8H120V56a8,8,0,0,0-16,0v8H88a8,8,0,0,0,0,16v96a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h16v8a8,8,0,0,0,16,0v-8.81A40.05,40.05,0,0,0,184,152ZM160,96a16,16,0,0,0-16-16H104v32h40A16,16,0,0,0,160,96Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyBtcFill'

export const CurrencyBtcFill = memo<IconProps>(themed(Icon))
