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
      <_Path d="M231.22,59.44l-80,168a8,8,0,1,1-14.44-6.88L165.62,160H32a8,8,0,0,1-5.88-13.43l42.56-46.1L26.59,61.9A8,8,0,0,1,32,48H224a8,8,0,0,1,7.22,11.44Z" />
    </_Svg>
  )
}

Icon.displayName = 'FlagBannerFill'

export const FlagBannerFill = memo<IconProps>(themed(Icon))
