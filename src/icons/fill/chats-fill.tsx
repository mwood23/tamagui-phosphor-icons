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
      <_Path d="M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a7.9,7.9,0,0,0,4.6,7.2,7.8,7.8,0,0,0,8.4-1l35-28.3V184a16,16,0,0,0,16,16h93.6L219,230.2a7.8,7.8,0,0,0,8.4,1A7.9,7.9,0,0,0,232,224Zm-42.6,89.8a7.7,7.7,0,0,0-5-1.8H88V152h80a16,16,0,0,0,16-16V96h32V207.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChatsFill'

export const ChatsFill = memo<IconProps>(themed(Icon))
