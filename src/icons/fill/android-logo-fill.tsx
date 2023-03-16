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
      <_Path d="M207.06,88.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8,8,0,0,0-11.32-11.32l-26,26a111.43,111.43,0,0,0-128.55.19L37.66,50.34A8,8,0,0,0,26.34,61.66L51.4,86.72A113.38,113.38,0,0,0,16,169.13V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V168A111.25,111.25,0,0,0,207.06,88.67ZM92,168a12,12,0,1,1,12-12A12,12,0,0,1,92,168Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,168Z" />
    </_Svg>
  )
}

Icon.displayName = 'AndroidLogoFill'

export const AndroidLogoFill = memo<IconProps>(themed(Icon))
