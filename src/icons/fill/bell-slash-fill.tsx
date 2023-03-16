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
      <_Path d="M53.94,34.62A8,8,0,1,0,42.1,45.38L58.84,63.8A79.49,79.49,0,0,0,48,104c0,35.34-8.27,62.38-13.82,71.94A16,16,0,0,0,48,200H88.82a40,40,0,0,0,78.39,0h15.45l19.44,21.38a8,8,0,1,0,11.84-10.76ZM128,216a24,24,0,0,1-22.63-16h45.25A24,24,0,0,1,128,216Zm87.29-37.41a8,8,0,0,1-10.14-1.41L86.58,46.74a8,8,0,0,1,2-12.34A80,80,0,0,1,208,104c0,35.35,8,58.59,10.51,64.88A8,8,0,0,1,215.31,178.59Z" />
    </_Svg>
  )
}

Icon.displayName = 'BellSlashFill'

export const BellSlashFill = memo<IconProps>(themed(Icon))
