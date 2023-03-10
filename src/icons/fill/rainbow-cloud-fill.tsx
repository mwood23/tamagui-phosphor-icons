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
      <_Path d="M248,160a48,48,0,0,1-48,48H152c-17.6,0-32-14.8-32-32.9s14.4-32.9,32-32.9l3.3.2A48,48,0,0,1,248,160ZM112,72a87.3,87.3,0,0,1,61.3,24.9,8,8,0,1,0,11.2-11.5A104,104,0,0,0,8,160v16a8,8,0,0,0,16,0V160A88.1,88.1,0,0,1,112,72Zm0,32a56,56,0,0,1,33.1,10.8,8,8,0,1,0,9.5-12.8A70.9,70.9,0,0,0,112,88a72.1,72.1,0,0,0-72,72v16a8,8,0,0,0,16,0V160A56,56,0,0,1,112,104Zm15.2,26.7a7.9,7.9,0,0,0-5.9-9.6A42.2,42.2,0,0,0,112,120a40,40,0,0,0-40,40v16a8,8,0,0,0,16,0V160a24.1,24.1,0,0,1,24-24,26,26,0,0,1,5.6.6A7.9,7.9,0,0,0,127.2,130.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'RainbowCloudFill'

export const RainbowCloudFill = memo<IconProps>(themed(Icon))
