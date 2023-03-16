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
      <_Path d="M232,136v56a24,24,0,0,1-24,24H192a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24h23.65a87.71,87.71,0,0,0-87-80H128a88,88,0,0,0-87.64,80H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V136A104.11,104.11,0,0,1,201.89,62.66,103.41,103.41,0,0,1,232,136Z" />
    </_Svg>
  )
}

Icon.displayName = 'HeadphonesFill'

export const HeadphonesFill = memo<IconProps>(themed(Icon))
