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
      <_Path d="M200,40H168a16,16,0,0,0-16-16H32A16,16,0,0,0,16,40v80a16,16,0,0,0,16,16h8v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM106.34,61.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L124.69,80Zm-64,24a8,8,0,0,1,0-11.32l24-24A8,8,0,0,1,77.66,61.66L59.31,80,77.66,98.34a8,8,0,0,1-11.32,11.32ZM200,200H56V136h96a16,16,0,0,0,16-16V56h32Z" />
    </_Svg>
  )
}

Icon.displayName = 'CodeBlockFill'

export const CodeBlockFill = memo<IconProps>(themed(Icon))
