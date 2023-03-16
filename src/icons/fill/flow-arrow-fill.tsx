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
      <_Path d="M245.66,85.66l-32,32a8,8,0,0,1-11.32-11.32L220.69,88H192c-1.66,0-41.35.77-48.11,41.31C139,158.6,121.75,172,108.13,178a71.12,71.12,0,0,1-27.49,6H79a32,32,0,1,1,0-16h1.33c1.62,0,40.77.81,47.79-41.32C132.82,98.44,150,85,163.65,78.73A74.49,74.49,0,0,1,192,72h28.69L202.34,53.66a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,245.66,85.66Z" />
    </_Svg>
  )
}

Icon.displayName = 'FlowArrowFill'

export const FlowArrowFill = memo<IconProps>(themed(Icon))
