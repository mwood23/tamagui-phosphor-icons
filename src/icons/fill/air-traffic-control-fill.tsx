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
      <_Path d="M229.11,62.82A16,16,0,0,0,216,56H136V24h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56H40A16,16,0,0,0,25,77.47l26.19,72a16,16,0,0,0,15,10.53H189.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,62.82ZM102.52,143.87a7.87,7.87,0,0,1-1.44.13,8,8,0,0,1-7.86-6.57L83,81.43a8,8,0,0,1,15.75-2.86l10.18,56A8,8,0,0,1,102.52,143.87ZM173,81.43l-10.19,56a8,8,0,0,1-7.86,6.57,7.87,7.87,0,0,1-1.44-.13,8,8,0,0,1-6.44-9.3l10.18-56A8,8,0,0,1,173,81.43ZM160,180v44a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V180a4,4,0,0,1,4-4h56A4,4,0,0,1,160,180Z" />
    </_Svg>
  )
}

Icon.displayName = 'AirTrafficControlFill'

export const AirTrafficControlFill = memo<IconProps>(themed(Icon))
