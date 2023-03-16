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
      <_Path
        d="M53.22,200S80,184,128,184s74.78,16,74.78,16l37-113.39a4.09,4.09,0,0,0-5.71-5l-53.43,26.64a4.12,4.12,0,0,1-5.35-1.56L131.52,34a4.1,4.1,0,0,0-7,0L80.71,106.72a4.11,4.11,0,0,1-5.36,1.56L22,81.66a4.1,4.1,0,0,0-5.72,5Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </_Svg>
  )
}

Icon.displayName = 'CrownSimpleBold'

export const CrownSimpleBold = memo<IconProps>(themed(Icon))
