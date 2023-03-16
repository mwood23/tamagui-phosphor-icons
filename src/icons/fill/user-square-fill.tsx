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
      <_Path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208h3.67a80.58,80.58,0,0,1,26.07-38.25q3.08-2.48,6.36-4.62a4,4,0,0,1,4.81.33,59.82,59.82,0,0,0,78.18,0,4,4,0,0,1,4.81-.33q3.28,2.15,6.36,4.62A80.58,80.58,0,0,1,204.33,208H208Z" />
    </_Svg>
  )
}

Icon.displayName = 'UserSquareFill'

export const UserSquareFill = memo<IconProps>(themed(Icon))
