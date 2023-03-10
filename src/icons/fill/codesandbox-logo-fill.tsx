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
      <_Path d="M232,126.8V78.7a15.6,15.6,0,0,0-2.1-7.9h-.1a15.5,15.5,0,0,0-6-5.9l-88-49.5a16,16,0,0,0-15.6,0l-88,49.5a16.2,16.2,0,0,0-6,5.9.1.1,0,0,1-.1.1v.2A15,15,0,0,0,24,78.7v48.1h0v50.5a16.1,16.1,0,0,0,8.2,14l44,24.7h0l44,24.8a16.5,16.5,0,0,0,7.2,2h1.3a16.1,16.1,0,0,0,7.1-2l44-24.8h0l44-24.7a16.1,16.1,0,0,0,8.2-14V126.8ZM83.9,147,40,122.2V87.6l80.9,45.1-.8,89.7L88,204.3V153.9A7.9,7.9,0,0,0,83.9,147ZM79,56.7,124.1,82a7.5,7.5,0,0,0,7.8,0L177,56.7,207.7,74l-78.8,44.8L48.4,74Zm57.9,76,79.1-45v34.5L172.1,147a7.9,7.9,0,0,0-4.1,6.9v50.4l-31.9,18Z" />
    </_Svg>
  )
}

Icon.displayName = 'CodesandboxLogoFill'

export const CodesandboxLogoFill = memo<IconProps>(themed(Icon))
