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
      <_Path d="M65.8,54.5a8,8,0,0,1,0,11.3A87.7,87.7,0,0,0,43,105.2a8.1,8.1,0,0,1-7.7,6l-2.1-.3a8,8,0,0,1-5.7-9.8,103.2,103.2,0,0,1,27-46.6A7.9,7.9,0,0,1,65.8,54.5ZM43,150.8a8,8,0,0,0-15.5,4.1,104.8,104.8,0,0,0,27,46.7,8,8,0,0,0,5.6,2.3,8.1,8.1,0,0,0,5.7-13.7A87.6,87.6,0,0,1,43,150.8ZM150.8,213a88.1,88.1,0,0,1-45.6,0,8,8,0,0,0-4.1,15.5,107,107,0,0,0,27,3.5,105.4,105.4,0,0,0,26.8-3.5,8,8,0,0,0-4.1-15.5Zm72-67.9a8,8,0,0,0-9.8,5.7,87.7,87.7,0,0,1-22.8,39.4,8.1,8.1,0,0,0,5.7,13.7,7.7,7.7,0,0,0,5.6-2.4,103.2,103.2,0,0,0,27-46.6A8,8,0,0,0,222.8,145.1ZM213,105.2a8.1,8.1,0,0,0,7.7,6l2.1-.3a8,8,0,0,0,5.7-9.8,104.8,104.8,0,0,0-27-46.7,7.9,7.9,0,0,0-11.3.1,8,8,0,0,0,0,11.3A87.6,87.6,0,0,1,213,105.2ZM105.2,43a88.1,88.1,0,0,1,45.6,0,7.6,7.6,0,0,0,2.1.3,8,8,0,0,0,2-15.8,104.4,104.4,0,0,0-53.8,0A8,8,0,0,0,105.2,43Z" />
    </_Svg>
  )
}

Icon.displayName = 'CircleDashedFill'

export const CircleDashedFill = memo<IconProps>(themed(Icon))
