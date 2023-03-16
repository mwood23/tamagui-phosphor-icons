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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm54.59,45a8,8,0,0,1,11.29.7,88,88,0,0,1,17.6,30.47,8,8,0,0,1-15.18,5.08,71.87,71.87,0,0,0-14.4-25A8,8,0,0,1,182.59,69ZM73.41,187.05a8,8,0,0,1-11.29-.7,88,88,0,0,1-17.6-30.47A8,8,0,1,1,59.7,150.8a71.87,71.87,0,0,0,14.4,24.95A8,8,0,0,1,73.41,187.05Zm.69-106.8a71.87,71.87,0,0,0-14.4,25,8,8,0,1,1-15.18-5.08,88,88,0,0,1,17.6-30.47,8,8,0,1,1,12,10.6Zm71.49,134a87.8,87.8,0,0,1-35.18,0,8,8,0,0,1,3.18-15.68,72.08,72.08,0,0,0,28.82,0,8,8,0,0,1,3.18,15.68Zm6.25-163A8,8,0,0,1,144,57.61a7.89,7.89,0,0,1-1.6-.16,72.08,72.08,0,0,0-28.82,0,8,8,0,1,1-3.18-15.68,87.92,87.92,0,0,1,35.18,0A8,8,0,0,1,151.84,51.2Zm59.64,104.68a88,88,0,0,1-17.6,30.47,8,8,0,1,1-12-10.6,71.87,71.87,0,0,0,14.4-24.95,8,8,0,0,1,15.18,5.08Z" />
    </_Svg>
  )
}

Icon.displayName = 'CircleDashedFill'

export const CircleDashedFill = memo<IconProps>(themed(Icon))
