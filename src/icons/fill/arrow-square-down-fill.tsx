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
      <_Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM167.6,139.7l-33.9,33.9a8,8,0,0,1-2.7,1.8,7.7,7.7,0,0,1-3,.6,8.5,8.5,0,0,1-3.1-.6,8.7,8.7,0,0,1-2.6-1.8L88.4,139.7a8,8,0,0,1,11.3-11.3L120,148.7V88a8,8,0,0,1,16,0v60.7l20.3-20.3a8,8,0,0,1,11.3,11.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowSquareDownFill'

export const ArrowSquareDownFill = memo<IconProps>(themed(Icon))
