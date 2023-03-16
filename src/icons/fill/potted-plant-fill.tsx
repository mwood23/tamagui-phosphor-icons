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
      <_Path d="M200,144h-76.7l22.41-22.41a59.55,59.55,0,0,0,26.1,6.36,49.56,49.56,0,0,0,25.89-7.22c23.72-14.36,36.43-47.6,34-88.92a8,8,0,0,0-7.52-7.52c-41.32-2.43-74.56,10.28-88.93,34-9.35,15.45-9.59,34.11-.86,52L120,124.68l-12.21-12.21c6-13.25,5.57-27-1.39-38.48C95.53,56,70.61,46.41,39.73,48.22a8,8,0,0,0-7.51,7.51C30.4,86.6,40,111.52,58,122.4A38.22,38.22,0,0,0,78,128a45,45,0,0,0,18.52-4.19L108.69,136l-8,8H56a8,8,0,0,0,0,16h9.59L78.8,219.47A15.89,15.89,0,0,0,94.42,232h67.17a15.91,15.91,0,0,0,15.62-12.53L190.42,160H200a8,8,0,0,0,0-16Z" />
    </_Svg>
  )
}

Icon.displayName = 'PottedPlantFill'

export const PottedPlantFill = memo<IconProps>(themed(Icon))
