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
      <_Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM200,216H56V40h92.69L200,91.31V216Zm-16-96v72a8,8,0,0,1-8,8H156a4,4,0,0,1-4-4V152a8,8,0,0,0-8.53-8,8.17,8.17,0,0,0-7.47,8.25V196a4,4,0,0,1-4,4h-8a4,4,0,0,1-4-4V152a8,8,0,0,0-8.53-8,8.17,8.17,0,0,0-7.47,8.25V196a4,4,0,0,1-4,4H80a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8h96A8,8,0,0,1,184,120Z" />
    </_Svg>
  )
}

Icon.displayName = 'SimCardFill'

export const SimCardFill = memo<IconProps>(themed(Icon))
