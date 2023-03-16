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
      <_Path d="M116,80h4v40h-4a20,20,0,0,1,0-40Zm32,56H136v40h12a20,20,0,0,0,0-40Zm84-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48,28a36,36,0,0,0-36-36H136V80h4a20,20,0,0,1,20,20,8,8,0,0,0,16,0,36,36,0,0,0-36-36h-4V56a8,8,0,0,0-16,0v8h-4a36,36,0,0,0,0,72h4v40h-8a20,20,0,0,1-20-20,8,8,0,0,0-16,0,36,36,0,0,0,36,36h8v8a8,8,0,0,0,16,0v-8h12A36,36,0,0,0,184,156Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyDollarFill'

export const CurrencyDollarFill = memo<IconProps>(themed(Icon))
