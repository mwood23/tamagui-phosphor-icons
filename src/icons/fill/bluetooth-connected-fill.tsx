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
      <_Path d="M192,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,120,232a8,8,0,0,1-8-8V144L60.8,182.4a8,8,0,0,1-9.6-12.8L106.67,128,51.2,86.4a8,8,0,0,1,9.6-12.8L112,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L133.33,128l55.47,41.6A8,8,0,0,1,192,176ZM64,128a12,12,0,1,0-12,12A12,12,0,0,0,64,128Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z" />
    </_Svg>
  )
}

Icon.displayName = 'BluetoothConnectedFill'

export const BluetoothConnectedFill = memo<IconProps>(themed(Icon))
