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
      <_Path d="M183.39,172.94a8,8,0,0,1-1.73,8.72l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,80,168h96A8,8,0,0,1,183.39,172.94ZM80,88h96a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,80,88Z" />
    </_Svg>
  )
}

Icon.displayName = 'CaretUpDownFill'

export const CaretUpDownFill = memo<IconProps>(themed(Icon))
