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
      <_Path d="M216,152a88.11,88.11,0,0,1-87.8,88c-50.66.12-90.21-43-88.12-93.62,1.21-29.21,11.71-60.54,29.23-86.82C87.5,32.29,109.43,16,128,16c13.25,0,28.23,8.32,42.34,23a4,4,0,0,1,.09,5.44L122,98.67a8,8,0,0,0,4,13.09l24.61,6.15-6.51,32.52a8,8,0,0,0,6.28,9.41A7.7,7.7,0,0,0,152,160a8,8,0,0,0,7.83-6.43l8-40a8,8,0,0,0-5.9-9.33l-19.16-4.79,36.89-41.33a4,4,0,0,1,6.29.41c.24.34.47.68.7,1C205.3,87.54,216,121.23,216,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'EggCrackFill'

export const EggCrackFill = memo<IconProps>(themed(Icon))
