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
      <_Path d="M167.9,92a12,12,0,1,1-12-12A12,12,0,0,1,167.9,92Zm-68-12a12,12,0,1,0,12,12A12,12,0,0,0,99.9,80ZM252,128a8,8,0,0,1-8,8H216v8a88.1,88.1,0,0,1-3.2,23.7l23.1,13.4a8,8,0,0,1-4,14.9,7.6,7.6,0,0,1-4-1.1L207,182.8a88,88,0,0,1-158,0L28.1,194.9a7.6,7.6,0,0,1-4,1.1,8,8,0,0,1-4-14.9l23.1-13.4A88.1,88.1,0,0,1,40,144v-8H12a8,8,0,0,1,0-16H40v-8a88.1,88.1,0,0,1,3.2-23.7L20.1,74.9a8,8,0,0,1-3-10.9,8.1,8.1,0,0,1,11-2.9L49,73.2a88,88,0,0,1,158,0l20.9-12.1a8.1,8.1,0,0,1,11,2.9,8,8,0,0,1-3,10.9L212.8,88.3A88.1,88.1,0,0,1,216,112v8h28A8,8,0,0,1,252,128ZM136,144a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0Zm64-32a72,72,0,0,0-144,0v8H200Z" />
    </_Svg>
  )
}

Icon.displayName = 'BugFill'

export const BugFill = memo<IconProps>(themed(Icon))
