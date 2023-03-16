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
      <_Path d="M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-18.34,5.65A8,8,0,0,0,100,128a28.11,28.11,0,0,1,13.83-24.15A8,8,0,0,0,116.7,93L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H92A8,8,0,0,0,97.66,133.65Zm55.27,21.53A8,8,0,0,0,142,152.26a28.05,28.05,0,0,1-28,0,8,8,0,0,0-10.93,2.93L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Zm79-36.76a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,2.87,10.9A28,28,0,0,1,156,126.54c0,.48,0,1,0,1.44a8,8,0,0,0,8,8l52,0a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Z" />
    </_Svg>
  )
}

Icon.displayName = 'RadioactiveFill'

export const RadioactiveFill = memo<IconProps>(themed(Icon))
