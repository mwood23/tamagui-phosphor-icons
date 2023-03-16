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
      <_Path d="M156,168H132.53l-14.4,24H144a8,8,0,0,1,6.86,12.12l-24,40a8,8,0,0,1-13.72-8.24L129.87,208H104a8,8,0,0,1-6.86-12.12L113.87,168h-37C48.12,168,24.2,145.07,24,116.36A52.09,52.09,0,0,1,61.35,66.1a4,4,0,0,1,5,4.78A92.48,92.48,0,0,0,64,87.39,8.14,8.14,0,0,0,71.41,96l.6,0a8.18,8.18,0,0,0,8.08-7.72A76,76,0,1,1,156,168Z" />
    </_Svg>
  )
}

Icon.displayName = 'CloudLightningFill'

export const CloudLightningFill = memo<IconProps>(themed(Icon))
