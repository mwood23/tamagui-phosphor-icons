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
      <_Path d="M232,136a56,56,0,0,1-83.4,48.82l11.06,36.88A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l11.06-36.88A56,56,0,0,1,24,136c0-32,17.65-62.84,51-89.27a234.14,234.14,0,0,1,49.89-30.11,7.93,7.93,0,0,1,6.16,0A234.14,234.14,0,0,1,181,46.73C214.35,73.16,232,104,232,136Z" />
    </_Svg>
  )
}

Icon.displayName = 'SpadeFill'

export const SpadeFill = memo<IconProps>(themed(Icon))
