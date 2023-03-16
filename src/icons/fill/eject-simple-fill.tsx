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
      <_Path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,1,1,0-16H224A8,8,0,0,1,232,208ZM40.09,168H215.91a16.1,16.1,0,0,0,12.48-26.23L146.74,40.94a24.11,24.11,0,0,0-37.48,0L27.61,141.77A16.1,16.1,0,0,0,40.09,168Z" />
    </_Svg>
  )
}

Icon.displayName = 'EjectSimpleFill'

export const EjectSimpleFill = memo<IconProps>(themed(Icon))
