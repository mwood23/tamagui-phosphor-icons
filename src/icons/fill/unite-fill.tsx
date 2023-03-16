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
      <_Path d="M64,160c0,3.2.16,6.37.47,9.49a80,80,0,1,1,105-105c-3.12-.31-6.29-.47-9.49-.47A96.11,96.11,0,0,0,64,160ZM176,96a79.22,79.22,0,0,0-1.37-14.63A79.22,79.22,0,0,0,160,80a80.09,80.09,0,0,0-80,80,79.22,79.22,0,0,0,1.37,14.63A79.22,79.22,0,0,0,96,176,80.09,80.09,0,0,0,176,96Zm15.53-9.49c.31,3.12.47,6.29.47,9.49a96.11,96.11,0,0,1-96,96c-3.2,0-6.37-.16-9.49-.47a80,80,0,1,0,105-105Z" />
    </_Svg>
  )
}

Icon.displayName = 'UniteFill'

export const UniteFill = memo<IconProps>(themed(Icon))
