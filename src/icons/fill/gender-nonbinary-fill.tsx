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
      <_Path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM128,208a52,52,0,0,1-8-103.38V83.82L91,95.43A8,8,0,0,1,85,80.57L106.46,72,85,63.43A8,8,0,0,1,91,48.57l37,14.81,37-14.81A8,8,0,1,1,171,63.43L149.54,72,171,80.57A8,8,0,0,1,165,95.43L136,83.82v20.8A52,52,0,0,1,128,208Zm36-52a36,36,0,1,1-36-36A36,36,0,0,1,164,156Z" />
    </_Svg>
  )
}

Icon.displayName = 'GenderNonbinaryFill'

export const GenderNonbinaryFill = memo<IconProps>(themed(Icon))
