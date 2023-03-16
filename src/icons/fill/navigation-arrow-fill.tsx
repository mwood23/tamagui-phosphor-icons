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
      <_Path d="M240,113.58a15.76,15.76,0,0,1-11.29,15l-76.56,23.56-23.56,76.56a15.77,15.77,0,0,1-15,11.29h-.3a15.77,15.77,0,0,1-15.07-10.67L33,53.41a1,1,0,0,1-.05-.16A16,16,0,0,1,53.25,32.9l.16.05L229.33,98.21A15.78,15.78,0,0,1,240,113.58Z" />
    </_Svg>
  )
}

Icon.displayName = 'NavigationArrowFill'

export const NavigationArrowFill = memo<IconProps>(themed(Icon))
