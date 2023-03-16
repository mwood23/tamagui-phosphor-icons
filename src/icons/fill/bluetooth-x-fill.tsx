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
      <_Path d="M192,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,120,232a7.9,7.9,0,0,1-4.11-1.14,8.3,8.3,0,0,1-3.9-7.18V144L60.76,182.4a8,8,0,0,1-11.16-1.55,8.26,8.26,0,0,1,1.8-11.43L106.66,128,51.38,86.57a8.19,8.19,0,0,1-2.13-10.93,8,8,0,0,1,11.51-2L112,112V32.24a8.21,8.21,0,0,1,2.83-6.34,8,8,0,0,1,10-.3l33.62,25.2A4,4,0,0,1,160,54v52a4,4,0,0,1-1.6,3.2L133.34,128l55.5,41.6A8,8,0,0,1,192,176Zm45.47-77.87L219.37,80l18.11-18.11a8.21,8.21,0,0,0,.41-11.37,8,8,0,0,0-11.49-.18L208.05,68.69,189.93,50.58a8.23,8.23,0,0,0-11.38-.41,8,8,0,0,0-.18,11.49L196.73,80,178.58,98.13a8.2,8.2,0,0,0-.6,11.1,8,8,0,0,0,11.71.43l18.36-18.35,18.35,18.35a8,8,0,0,0,11.72-.43A8.21,8.21,0,0,0,237.51,98.13Z" />
    </_Svg>
  )
}

Icon.displayName = 'BluetoothXFill'

export const BluetoothXFill = memo<IconProps>(themed(Icon))
