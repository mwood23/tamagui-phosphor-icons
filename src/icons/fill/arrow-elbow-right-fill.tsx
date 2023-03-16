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
      <_Path d="M240,80v72a8,8,0,0,1-13.66,5.66L196,127.31l-70.34,70.35a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,29.66,90.34L120,180.69,184.69,116,154.34,85.66A8,8,0,0,1,160,72h72A8,8,0,0,1,240,80Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowElbowRightFill'

export const ArrowElbowRightFill = memo<IconProps>(themed(Icon))
