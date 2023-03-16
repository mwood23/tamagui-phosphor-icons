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
      <_Path d="M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm16,52a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z" />
    </_Svg>
  )
}

Icon.displayName = 'BugDroidFill'

export const BugDroidFill = memo<IconProps>(themed(Icon))
