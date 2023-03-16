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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Circle cx="156" cy="76" r="8" fill={`${color}`} />
      <_Path
        d="M16,183.86C248.25,234.7,227,72.36,220.36,41.8a8,8,0,0,0-6.16-6.16C183.64,29,21.29,7.75,72.1,240"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <_Path
        d="M201.89,152A96,96,0,0,1,104,54.1"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </_Svg>
  )
}

Icon.displayName = 'FishSimpleThin'

export const FishSimpleThin = memo<IconProps>(themed(Icon))
