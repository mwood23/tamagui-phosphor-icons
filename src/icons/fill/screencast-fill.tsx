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
      <_Path d="M56,208a8,8,0,0,1-16,0,8,8,0,0,0-8-8,8,8,0,0,1,0-16A24,24,0,0,1,56,208ZM32,152a8,8,0,0,0,0,16,40,40,0,0,1,40,40,8,8,0,0,0,16,0A56.06,56.06,0,0,0,32,152Zm0-32a8,8,0,0,0,0,16,72.08,72.08,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,32,120ZM216,40H40A16,16,0,0,0,24,56V96a8,8,0,0,0,8,8A104.11,104.11,0,0,1,136,208a8,8,0,0,0,8,8h72a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" />
    </_Svg>
  )
}

Icon.displayName = 'ScreencastFill'

export const ScreencastFill = memo<IconProps>(themed(Icon))
