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
      <_Path d="M200,156c0,6.5-7.33,12-16,12s-16-5.5-16-12,7.33-12,16-12S200,149.5,200,156ZM73.61,136h36.78L92,92.53ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM143.37,172.88l-44-104a8,8,0,0,0-14.74,0l-44,104a8,8,0,0,0,14.74,6.24L66.84,152h50.32l11.47,27.12a8,8,0,0,0,14.74-6.24ZM216,132c0-15.44-14.36-28-32-28a34.86,34.86,0,0,0-20.78,6.68,8,8,0,0,0,9.56,12.83A18.84,18.84,0,0,1,184,120c8.56,0,15.8,5.36,16,11.76A35.24,35.24,0,0,0,184,128c-17.64,0-32,12.56-32,28s14.36,28,32,28a35.13,35.13,0,0,0,16.93-4.26A8,8,0,0,0,216,176Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextAaFill'

export const TextAaFill = memo<IconProps>(themed(Icon))
