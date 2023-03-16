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
      <_Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM195.58,175.16c-.72.36-17.89,8.84-35.58,8.84-17.89,0-27.29-4.7-35.58-8.84C116.74,171.32,110.11,168,96,168c-13.84,0-28.29,7.09-28.43,7.16a8,8,0,0,1-7.15-14.32C61.14,160.48,78.31,152,96,152c17.89,0,27.29,4.7,35.58,8.84,7.68,3.84,14.31,7.16,28.42,7.16,13.84,0,28.29-7.09,28.43-7.16a8,8,0,0,1,7.15,14.32Zm0-40c-.72.36-17.89,8.84-35.58,8.84-17.89,0-27.29-4.7-35.58-8.84C116.74,131.32,110.11,128,96,128c-13.84,0-28.29,7.09-28.43,7.16a8,8,0,0,1-7.15-14.32C61.14,120.48,78.31,112,96,112c17.89,0,27.29,4.7,35.58,8.84,7.68,3.84,14.31,7.16,28.42,7.16,13.84,0,28.29-7.09,28.43-7.16a8,8,0,0,1,7.15,14.32Zm0-40c-.72.36-17.89,8.84-35.58,8.84-17.89,0-27.29-4.7-35.58-8.84C116.74,91.32,110.11,88,96,88c-13.84,0-28.29,7.09-28.43,7.16a8,8,0,0,1-7.15-14.32C61.14,80.48,78.31,72,96,72c17.89,0,27.29,4.7,35.58,8.84C139.26,84.68,145.89,88,160,88c13.84,0,28.29-7.09,28.43-7.16a8,8,0,0,1,7.15,14.32Z" />
    </_Svg>
  )
}

Icon.displayName = 'WavesFill'

export const WavesFill = memo<IconProps>(themed(Icon))
