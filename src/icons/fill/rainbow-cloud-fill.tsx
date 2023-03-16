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
      <_Path d="M248,160a48.05,48.05,0,0,1-48,48H152c-17.65,0-32-14.75-32-32.89s14.35-32.89,32-32.89a31,31,0,0,1,3.34.18A48,48,0,0,1,248,160ZM112,72a87.57,87.57,0,0,1,61.35,24.91A8,8,0,0,0,184.5,85.44,104,104,0,0,0,8,160v16a8,8,0,0,0,16,0V160A88.1,88.1,0,0,1,112,72Zm0,32a55.58,55.58,0,0,1,33.13,10.84A8,8,0,1,0,154.6,102,72,72,0,0,0,40,160v16a8,8,0,0,0,16,0V160A56.06,56.06,0,0,1,112,104Zm15.21,26.71a8,8,0,0,0-5.94-9.63A40,40,0,0,0,72,160v16a8,8,0,0,0,16,0V160a24,24,0,0,1,29.57-23.35A8,8,0,0,0,127.21,130.71Z" />
    </_Svg>
  )
}

Icon.displayName = 'RainbowCloudFill'

export const RainbowCloudFill = memo<IconProps>(themed(Icon))
