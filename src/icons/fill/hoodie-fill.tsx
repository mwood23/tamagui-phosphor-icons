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
      <_Path d="M238.66,123.56l-56.3-84.44A16,16,0,0,0,169.05,32H87a16,16,0,0,0-13.31,7.12l-56.3,84.44a8,8,0,0,0-1.06,6.54l22.39,82.11A16,16,0,0,0,54.11,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h25.89a16,16,0,0,0,15.44-11.79l22.39-82.11A8,8,0,0,0,238.66,123.56ZM80,208H54.11L32.68,129.41,64,82.42V176a16,16,0,0,0,16,16Zm40-72a8,8,0,0,1-16,0V94.86a8,8,0,0,1,16,0Zm32-8a8,8,0,0,1-16,0V94.86a8,8,0,0,1,16,0ZM128,78.79,83.41,53.31,87,48h82.1l3.54,5.31ZM201.89,208H176V192a16,16,0,0,0,16-16V82.42l31.32,47Z" />
    </_Svg>
  )
}

Icon.displayName = 'HoodieFill'

export const HoodieFill = memo<IconProps>(themed(Icon))
