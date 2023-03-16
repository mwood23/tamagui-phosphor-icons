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
      <_Path d="M239,188.08,173.68,72h58A8.17,8.17,0,0,0,240,64.53,8,8,0,0,0,232,56H24.27A8.17,8.17,0,0,0,16,63.47,8,8,0,0,0,24,72H82.32L17,188.08a8,8,0,0,0,1.17,9.43,8.24,8.24,0,0,0,6,2.49H116a4,4,0,0,0,4-4V176.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v20a4,4,0,0,0,4,4h91.77a8.24,8.24,0,0,0,6-2.49A8,8,0,0,0,239,188.08ZM136,140a8,8,0,0,1-16,0V124a8,8,0,0,1,16,0Zm0-52a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'RoadHorizonFill'

export const RoadHorizonFill = memo<IconProps>(themed(Icon))
