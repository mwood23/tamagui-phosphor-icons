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
      <_Circle cx="100" cy="92" r="12" fill={`${color}`} />
      <_Path d="M208,32H48A16,16,0,0,0,32,48V176h0v32a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-28.7,80a16.1,16.1,0,0,0-22.6,0L112,156.7,91.3,136a16.1,16.1,0,0,0-22.6,0L48,156.7V48H208v92.7Z" />
    </_Svg>
  )
}

Icon.displayName = 'ImageSquareFill'

export const ImageSquareFill = memo<IconProps>(themed(Icon))
