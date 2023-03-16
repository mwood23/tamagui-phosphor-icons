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
      <_Circle cx="156" cy="172" r="12" fill={`${color}`} />
      <_Circle cx="92" cy="164" r="12" fill={`${color}`} />
      <_Circle cx="84" cy="108" r="12" fill={`${color}`} />
      <_Circle cx="132" cy="124" r="12" fill={`${color}`} />
      <_Path
        d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </_Svg>
  )
}

Icon.displayName = 'CookieRegular'

export const CookieRegular = memo<IconProps>(themed(Icon))
