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
      <_Path d="M53.44,43.5,54.12,38A16,16,0,0,1,70,24H186a16,16,0,0,1,15.88,14l.68,5.49a4,4,0,0,1-4,4.5H57.41A4,4,0,0,1,53.44,43.5ZM169,64a32.06,32.06,0,0,0,31,24h3.59a4,4,0,0,0,4-4.5l-2-16a4,4,0,0,0-4-3.5ZM52.41,88H56A32.06,32.06,0,0,0,87,64H54.41a4,4,0,0,0-4,3.5l-2,16A4,4,0,0,0,52.41,88ZM223.88,214,210.56,107.5a4,4,0,0,0-4-3.5H200a48.07,48.07,0,0,1-47.32-40H136v39.73a8.18,8.18,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V64H103.32A48.07,48.07,0,0,1,56,104H49.41a4,4,0,0,0-4,3.5L32.12,214a16,16,0,0,0,6.71,15.09A16.56,16.56,0,0,0,48.39,232h40.3a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232h40.3a16.54,16.54,0,0,0,9.56-2.89A16,16,0,0,0,223.88,214Z" />
    </_Svg>
  )
}

Icon.displayName = 'PantsFill'

export const PantsFill = memo<IconProps>(themed(Icon))
