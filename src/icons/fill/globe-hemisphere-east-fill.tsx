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
      <_Path d="M223.5,169.2a6.1,6.1,0,0,0,.5-1.2A104,104,0,0,0,187.8,42.9l-1.2-.7A103,103,0,0,0,128,24,104,104,0,0,0,42.6,187.3v.2a10.5,10.5,0,0,0,.8,1.1,104,104,0,0,0,147.8,21.9l1.4-1.1A105.3,105.3,0,0,0,223.5,169.2Zm-162,16.4,3.9-2.4a15.8,15.8,0,0,0,7.7-13.6l.2-33.8a8.3,8.3,0,0,1,1.3-4.3l14-22a8,8,0,0,1,11.4-2.2l12.8,9.3a16.5,16.5,0,0,0,11.6,2.9l31.4-4.3a15.8,15.8,0,0,0,10-5.4l22.1-25.6A15.4,15.4,0,0,0,191.8,73l-.2-5.8A87.7,87.7,0,0,1,216,128a86.4,86.4,0,0,1-3.2,23.4l-15.9-14.6a16.1,16.1,0,0,0-16.9-3l-30.5,12.7a16.1,16.1,0,0,0-9.7,12.4l-2.4,16.2A16.2,16.2,0,0,0,149.2,193l21.5,5.6,4,4a88,88,0,0,1-113.2-17Z" />
    </_Svg>
  )
}

Icon.displayName = 'GlobeHemisphereEastFill'

export const GlobeHemisphereEastFill = memo<IconProps>(themed(Icon))
