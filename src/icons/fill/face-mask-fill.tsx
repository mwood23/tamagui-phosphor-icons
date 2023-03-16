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
      <_Path d="M224,72h-.85a16,16,0,0,0-9.68-10L133.47,33a16.06,16.06,0,0,0-10.94,0l-80,29.09a16,16,0,0,0-9.68,10H32A32,32,0,0,0,0,104v24a32,32,0,0,0,32,32h5.13c6.54,14.44,19.26,27.12,37.7,37.36,21,11.68,43.52,17,49.92,18.3a15.7,15.7,0,0,0,6.5,0c6.4-1.34,28.9-6.62,49.92-18.3,18.44-10.24,31.16-22.92,37.7-37.36H224a32,32,0,0,0,32-32V104A32,32,0,0,0,224,72ZM32,144a16,16,0,0,1-16-16V104A16,16,0,0,1,32,88v48.15a59.94,59.94,0,0,0,.53,7.85Zm136,0H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm72,16a16,16,0,0,1-16,16h-.53a59.94,59.94,0,0,0,.53-7.85V88a16,16,0,0,1,16,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'FaceMaskFill'

export const FaceMaskFill = memo<IconProps>(themed(Icon))
