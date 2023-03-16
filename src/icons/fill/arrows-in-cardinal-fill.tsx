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
      <_Path d="M90.34,69.66A8,8,0,0,1,96,56h24V24a8,8,0,0,1,16,0V56h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0Zm43.32,84.68a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,200h24v32a8,8,0,0,0,16,0V200h24a8,8,0,0,0,5.66-13.66ZM232,120H200V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,200,160V136h32a8,8,0,0,0,0-16Zm-130.34,2.34-32-32A8,8,0,0,0,56,96v24H24a8,8,0,0,0,0,16H56v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,101.66,122.34Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowsInCardinalFill'

export const ArrowsInCardinalFill = memo<IconProps>(themed(Icon))
