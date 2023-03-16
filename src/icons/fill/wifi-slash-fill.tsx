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
      <_Path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-33.67-37-28.1,33.88A15.93,15.93,0,0,1,128,224h0a15.93,15.93,0,0,1-12.31-5.77L11.65,92.8A15.65,15.65,0,0,1,8.11,80.91,15.93,15.93,0,0,1,14.28,70.1,187.93,187.93,0,0,1,46.63,50.39l-4.55-5A8,8,0,1,1,53.92,34.62Zm34-129.71a15.93,15.93,0,0,0-6.17-10.81A186.67,186.67,0,0,0,128,32a190.62,190.62,0,0,0-35.36,3.3A8,8,0,0,0,88.2,48.54l94.65,104.12a8,8,0,0,0,5.92,2.62H189a8,8,0,0,0,6-2.9L244.35,92.8A15.65,15.65,0,0,0,247.89,80.91Z" />
    </_Svg>
  )
}

Icon.displayName = 'WifiSlashFill'

export const WifiSlashFill = memo<IconProps>(themed(Icon))
