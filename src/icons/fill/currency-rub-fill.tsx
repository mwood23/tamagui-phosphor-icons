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
      <_Path d="M176,108a28,28,0,0,1-28,28H112V80h36A28,28,0,0,1,176,108Zm56,20A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-40-20a44.05,44.05,0,0,0-44-44H104a8,8,0,0,0-8,8v64H80a8,8,0,0,0,0,16H96v16H80a8,8,0,0,0,0,16H96v16a8,8,0,0,0,16,0V184h40a8,8,0,0,0,0-16H112V152h36A44.05,44.05,0,0,0,192,108Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyRubFill'

export const CurrencyRubFill = memo<IconProps>(themed(Icon))
