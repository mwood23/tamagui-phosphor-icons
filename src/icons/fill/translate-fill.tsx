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

import { IconProps } from '../../IconProps'
import { themed } from '../../themed'

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
      <_Path d="M239.1,212.4l-56-112A7.9,7.9,0,0,0,176,96a8,8,0,0,0-7.2,4.4l-21.7,43.4A87.4,87.4,0,0,1,100,126.9,104.1,104.1,0,0,0,127.7,64H152a8,8,0,0,0,0-16H96V32a8,8,0,0,0-16,0V48H24a8,8,0,0,0,0,16h87.6A87.5,87.5,0,0,1,88,116.3a87.1,87.1,0,0,1-19-31,8,8,0,0,0-10.2-4.8,7.9,7.9,0,0,0-4.9,10.2A103.8,103.8,0,0,0,76,126.9,87.1,87.1,0,0,1,24,144a8,8,0,0,0,0,16,103.8,103.8,0,0,0,64-22.1,103.6,103.6,0,0,0,51.4,21.3l-26.6,53.2a8,8,0,1,0,14.3,7.2L140.9,192H211l13.8,27.6A8,8,0,0,0,232,224a9.4,9.4,0,0,0,3.6-.8A8.1,8.1,0,0,0,239.1,212.4ZM148.9,176,176,121.9,203,176Z" />
    </_Svg>
  )
}

Icon.displayName = 'TranslateFill'

export const TranslateFill = memo<IconProps>(themed(Icon))