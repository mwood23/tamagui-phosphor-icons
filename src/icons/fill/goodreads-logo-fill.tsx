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
      <_Path d="M160,104v8a32,32,0,0,1-64,0v-8a32,32,0,0,1,64,0Zm72,24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM176,64a8,8,0,0,0-16,0v4.26A48,48,0,0,0,80,104v8a48,48,0,0,0,80,35.74V160a32,32,0,0,1-57.6,19.2,8,8,0,1,0-12.8,9.6A48,48,0,0,0,176,160Z" />
    </_Svg>
  )
}

Icon.displayName = 'GoodreadsLogoFill'

export const GoodreadsLogoFill = memo<IconProps>(themed(Icon))
