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
      <_Path d="M180,209.6a119.4,119.4,0,0,0,16-8.5V240a8,8,0,0,1-16,0ZM120.9,92.2a8.2,8.2,0,0,0,3.3,10.9L171,128l17-9.1-56.2-30A8.2,8.2,0,0,0,120.9,92.2Zm130.9-3.3-120-64a8.5,8.5,0,0,0-7.6,0l-120,64a8.1,8.1,0,0,0,0,14.2L28,115.7v49.8a15.5,15.5,0,0,0,3.2,9.5c7.9,10.6,38.3,45,96.8,45a128.7,128.7,0,0,0,52-10.5V132.8l-9-4.8-43,22.9-88.2-47h0L25,96,128,41.1,231,96l-14.8,7.9h0l-28.2,15,3.8,2a8.4,8.4,0,0,1,3.2,3.3,7.5,7.5,0,0,1,1,3.8v73.1A111.8,111.8,0,0,0,224.8,175a15.5,15.5,0,0,0,3.2-9.5V115.7l23.8-12.6a8.1,8.1,0,0,0,0-14.2Z" />
    </_Svg>
  )
}

Icon.displayName = 'GraduationCapFill'

export const GraduationCapFill = memo<IconProps>(themed(Icon))
