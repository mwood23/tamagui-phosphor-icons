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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm20,168H136v8a8,8,0,0,1-16,0v-8h-8a36,36,0,0,1-36-36,8,8,0,0,1,16,0,20,20,0,0,0,20,20h36a20,20,0,0,0,0-40H116a36,36,0,0,1,0-72h4V56a8,8,0,0,1,16,0v8h4a36,36,0,0,1,36,36,8,8,0,0,1-16,0,20,20,0,0,0-20-20H116a20,20,0,0,0,0,40h32a36,36,0,0,1,0,72Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyDollarSimpleFill'

export const CurrencyDollarSimpleFill = memo<IconProps>(themed(Icon))
