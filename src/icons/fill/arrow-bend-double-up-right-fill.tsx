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
      <_Path d="M229.7,109.7l-48,48a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L212.7,104,170.3,61.7a8.1,8.1,0,0,1,11.4-11.4l48,48A8.1,8.1,0,0,1,229.7,109.7Zm-48-11.4-48-48a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,120,56V96.3A104.1,104.1,0,0,0,24,200a8,8,0,0,0,16,0,88.1,88.1,0,0,1,80-87.6V152a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l48-48A8.1,8.1,0,0,0,181.7,98.3Z" />
    </_Svg>
  )
}

Icon.displayName = 'ArrowBendDoubleUpRightFill'

export const ArrowBendDoubleUpRightFill = memo<IconProps>(themed(Icon))
