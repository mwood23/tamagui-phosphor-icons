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
      <_Path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,160a8,8,0,0,1-5.66-2.34l-24-24a8,8,0,0,1,11.32-11.32L80,140.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56A8,8,0,0,1,80,160Zm133.66-58.34-56,56a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L152,140.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
    </_Svg>
  )
}

Icon.displayName = 'ChecksFill'

export const ChecksFill = memo<IconProps>(themed(Icon))
