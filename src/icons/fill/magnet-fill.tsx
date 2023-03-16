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
      <_Path d="M207,50.25A87.46,87.46,0,0,0,144.6,24h-.33A87.48,87.48,0,0,0,82,49.81L20.61,112a16,16,0,0,0,.06,22.56l28.66,28.66a15.92,15.92,0,0,0,11.32,4.69h.09a16,16,0,0,0,11.36-4.82L133,100.69a16.08,16.08,0,0,1,22.41-.21,15.6,15.6,0,0,1,4.73,11.19,16.89,16.89,0,0,1-4.85,12L93,183.88a16,16,0,0,0-.17,22.79l28.66,28.66a16.06,16.06,0,0,0,22.52.12L205.81,175C240.26,140.5,240.79,84.56,207,50.25ZM60.65,151.89,32,123.24,61.42,93.43,89.9,121.91ZM132.79,224l-28.68-28.65,30.13-29.13,28.49,28.48Z" />
    </_Svg>
  )
}

Icon.displayName = 'MagnetFill'

export const MagnetFill = memo<IconProps>(themed(Icon))
