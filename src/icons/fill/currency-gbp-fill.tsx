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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,168H80a8,8,0,0,1,0-16h4a20,20,0,0,0,20-20V136H80a8,8,0,0,1,0-16h24V96a40,40,0,0,1,60-34.64,8,8,0,1,1-8,13.85A24,24,0,0,0,120,96v24h24a8,8,0,0,1,0,16H120v20a35.79,35.79,0,0,1-6.08,20H168a8,8,0,0,1,0,16Z" />
    </_Svg>
  )
}

Icon.displayName = 'CurrencyGbpFill'

export const CurrencyGbpFill = memo<IconProps>(themed(Icon))
