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
      <_Path d="M256,168a8,8,0,0,1-8,8H8A8,8,0,0,1,.34,165.7h0v0l0-.05L22.63,91.4A15.89,15.89,0,0,1,38,80h84.1a15.89,15.89,0,0,1,15.32,11.4L158,160h31.3l-19.2-64H160a8,8,0,0,1,0-16h10.05a15.89,15.89,0,0,1,15.32,11.4L206,160h31.3l-19.2-64H208a8,8,0,0,1,0-16h10.05a15.89,15.89,0,0,1,15.32,11.4l22.26,74.19a.24.24,0,0,1,0,.08v0h0A8,8,0,0,1,256,168Z" />
    </_Svg>
  )
}

Icon.displayName = 'TabsFill'

export const TabsFill = memo<IconProps>(themed(Icon))
