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
      <_Path d="M93.66,106.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L56,132.69l26.34-26.35A8,8,0,0,1,93.66,106.34Zm-11.32-64L56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,128L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32ZM216,48H128a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Zm0,128H128a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-64H128a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V120A8,8,0,0,0,216,112Z" />
    </_Svg>
  )
}

Icon.displayName = 'ListChecksFill'

export const ListChecksFill = memo<IconProps>(themed(Icon))
