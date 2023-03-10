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
      <_Path d="M176,120a8,8,0,0,0-8,8,229.3,229.3,0,0,1-17.4,88.2,8,8,0,0,0,7.4,11,7.9,7.9,0,0,0,7.4-5A246.5,246.5,0,0,0,184,128,8,8,0,0,0,176,120Z" />
      <_Path d="M128,88a40.4,40.4,0,0,1,29.8,13.3,8,8,0,0,0,11.3.7,8,8,0,0,0,.6-11.3A56,56,0,0,0,72,128a136.4,136.4,0,0,1-17,65.9,8,8,0,0,0,3.1,10.8,8.1,8.1,0,0,0,3.9,1,7.9,7.9,0,0,0,7-4.1A152.2,152.2,0,0,0,88,128,40.1,40.1,0,0,1,128,88Z" />
      <_Path d="M69.3,62.4A8,8,0,1,0,58.6,50.5,104.2,104.2,0,0,0,24,128a87.6,87.6,0,0,1-8,36.7,8.1,8.1,0,0,0,3.9,10.6,8.3,8.3,0,0,0,3.4.7,7.8,7.8,0,0,0,7.2-4.7A102.4,102.4,0,0,0,40,128,88.3,88.3,0,0,1,69.3,62.4Z" />
      <_Path d="M128,24a104.5,104.5,0,0,0-34.7,5.9,8.1,8.1,0,0,0-4.9,10.2A8,8,0,0,0,98.6,45,88.1,88.1,0,0,1,216,128a281.8,281.8,0,0,1-7,62.2,8.2,8.2,0,0,0,6.1,9.6l1.8.2a7.9,7.9,0,0,0,7.7-6.2A296.3,296.3,0,0,0,232,128,104.2,104.2,0,0,0,128,24Z" />
      <_Path d="M113.9,200.7a8.1,8.1,0,0,0-10.6,4c-1.9,4.2-4.1,8.4-6.3,12.4a8.1,8.1,0,0,0,3.1,10.9,7.8,7.8,0,0,0,3.9,1,8.1,8.1,0,0,0,7-4.1c2.4-4.4,4.7-9,6.8-13.6A8,8,0,0,0,113.9,200.7Z" />
      <_Path d="M128,120a8,8,0,0,0-8,8,186.5,186.5,0,0,1-5.8,46,8,8,0,0,0,5.7,9.8l2,.2a8.1,8.1,0,0,0,7.8-6,199.8,199.8,0,0,0,6.3-50A8,8,0,0,0,128,120Z" />
    </_Svg>
  )
}

Icon.displayName = 'FingerprintSimpleFill'

export const FingerprintSimpleFill = memo<IconProps>(themed(Icon))
