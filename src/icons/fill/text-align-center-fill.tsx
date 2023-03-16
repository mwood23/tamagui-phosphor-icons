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
      <_Path d="M224,64v8a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Zm-32,56a8,8,0,0,0,8-8v-8a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8Zm24,16H40a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8v-8A8,8,0,0,0,216,136Zm-24,40H64a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8v-8A8,8,0,0,0,192,176Z" />
    </_Svg>
  )
}

Icon.displayName = 'TextAlignCenterFill'

export const TextAlignCenterFill = memo<IconProps>(themed(Icon))
