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
      <_Path d="M223.6,114.2,55.9,18.1a16.2,16.2,0,0,0-16.2.1,15.8,15.8,0,0,0-7.9,13.7V224.1a16,16,0,0,0,16,15.9,16.9,16.9,0,0,0,8.1-2.1l167.7-96.1a15.7,15.7,0,0,0,0-27.6ZM144,139.3l18.9,18.9L74.7,208.6Zm-69.3-92,88.2,50.5L144,116.7ZM177.2,149.9,155.3,128l21.9-21.9L215.6,128Z" />
    </_Svg>
  )
}

Icon.displayName = 'GooglePlayLogoFill'

export const GooglePlayLogoFill = memo<IconProps>(themed(Icon))
