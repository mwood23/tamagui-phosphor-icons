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
      <_Path d="M156,72a78.8,78.8,0,0,0-20.2,2.7,58.9,58.9,0,0,0-9.4-11.5l9.4-13.6a7.9,7.9,0,0,0-1.9-11.1,8,8,0,0,0-11.2,1.9L113.2,54a55,55,0,0,0-26.9-6L83.4,31.7a8,8,0,1,0-15.8,2.8l2.9,16.3A55.7,55.7,0,0,0,47.2,65.6L33.6,56.1a8,8,0,0,0-11.1,2,7.9,7.9,0,0,0,1.9,11.1L38,78.7a55.1,55.1,0,0,0-6,27l-16.3,2.9a8,8,0,0,0,1.4,15.9h1.4l16.3-2.9a52.3,52.3,0,0,0,5.9,12.4A51.9,51.9,0,0,0,76,224h80a76,76,0,0,0,0-152ZM48.6,111.1v-.4a39.6,39.6,0,0,1,6.5-29.5V81h.1A40.1,40.1,0,0,1,80.8,64.6h.5a39.5,39.5,0,0,1,29.1,6.3l.5.3.4.3a37.4,37.4,0,0,1,9.3,9.3,76.6,76.6,0,0,0-35.6,40,53.8,53.8,0,0,0-9-.8,52.6,52.6,0,0,0-22.1,4.9A40,40,0,0,1,48.6,111.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'CloudSunFill'

export const CloudSunFill = memo<IconProps>(themed(Icon))
