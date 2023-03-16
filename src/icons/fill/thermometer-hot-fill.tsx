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
      <_Path d="M177.41,80.54a8,8,0,0,1,2.05-11.12c10.4-7.18,26.68-7.18,37.08,0,5,3.47,13.88,3.47,18.92,0a8,8,0,0,1,9.08,13.16,34.64,34.64,0,0,1-37.08,0c-5-3.47-13.88-3.47-18.92,0A8,8,0,0,1,177.41,80.54Zm58.05,20.88c-5,3.47-13.88,3.47-18.92,0-10.4-7.18-26.68-7.18-37.08,0a8,8,0,1,0,9.08,13.16c5-3.47,13.88-3.47,18.92,0a34.64,34.64,0,0,0,37.08,0,8,8,0,0,0-9.08-13.16ZM176,192a56,56,0,1,1-88-45.92V40a32,32,0,0,1,64,0V146.08A56,56,0,0,1,176,192ZM136,40a16,16,0,0,0-32,0V80h32Z" />
    </_Svg>
  )
}

Icon.displayName = 'ThermometerHotFill'

export const ThermometerHotFill = memo<IconProps>(themed(Icon))
