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
      <_Path d="M190,32H66A32.1,32.1,0,0,0,34,64V216a16,16,0,0,0,16,16H74a16,16,0,0,0,16-16V200h76v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V64A32.1,32.1,0,0,0,190,32ZM82,168a12,12,0,1,1,12-12A12,12,0,0,1,82,168Zm92,0a12,12,0,1,1,12-12A12,12,0,0,1,174,168Zm32-48H50V72H206Z" />
    </_Svg>
  )
}

Icon.displayName = 'BusFill'

export const BusFill = memo<IconProps>(themed(Icon))
