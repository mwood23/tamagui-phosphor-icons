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
      <_Path d="M161.2,217.7a4,4,0,0,1-3.3,6.3H98.1a4,4,0,0,1-3.3-6.3,40,40,0,0,1,66.4,0Zm68.6,3.8a8.2,8.2,0,0,1-6,2.5H184.6a4.1,4.1,0,0,1-3.8-2.7,56,56,0,0,0-105.6,0,4.1,4.1,0,0,1-3.8,2.7H32.2a8,8,0,0,1-6-2.5,7.9,7.9,0,0,1-1.1-9.5c.3-.5,30.9-55,30.9-116a72.1,72.1,0,0,1,72.5-72c39.6.3,71.4,32.9,71.5,72.5.2,60.8,30.6,115,30.9,115.5A7.9,7.9,0,0,1,229.8,221.5ZM88,108a12,12,0,1,0,12-12A12,12,0,0,0,88,108Zm79.2,32.4a8.2,8.2,0,0,0-10.8-3.6L128,151.1,99.6,136.8a8,8,0,1,0-7.2,14.4l32,16a8.5,8.5,0,0,0,7.2,0l32-16A8.2,8.2,0,0,0,167.2,140.4ZM168,108a12,12,0,1,0-12,12A12,12,0,0,0,168,108Z" />
    </_Svg>
  )
}

Icon.displayName = 'LinuxLogoFill'

export const LinuxLogoFill = memo<IconProps>(themed(Icon))
