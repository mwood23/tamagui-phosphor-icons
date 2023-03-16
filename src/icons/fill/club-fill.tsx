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
      <_Path d="M240,144a56,56,0,0,1-84.81,48h-4.44l8.91,29.7A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l8.91-29.7h-4.44A56,56,0,1,1,72,88c.78,0,1.55,0,2.33,0a56,56,0,1,1,107.34,0c.77,0,1.55,0,2.33,0A56.06,56.06,0,0,1,240,144Z" />
    </_Svg>
  )
}

Icon.displayName = 'ClubFill'

export const ClubFill = memo<IconProps>(themed(Icon))
