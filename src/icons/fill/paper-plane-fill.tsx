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
      <_Path d="M236.2,218.3a15.87,15.87,0,0,1-17.54,4.76L138.71,195.7a4,4,0,0,1-2.71-3.79V120a8,8,0,0,0-8.53-8,8.19,8.19,0,0,0-7.47,8.26v71.57a4,4,0,0,1-2.7,3.79l-80,27.44a16,16,0,0,1-19.25-22.92L114,32.13a16,16,0,0,1,27.89,0L237.9,200.09A15.89,15.89,0,0,1,236.2,218.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'PaperPlaneFill'

export const PaperPlaneFill = memo<IconProps>(themed(Icon))
