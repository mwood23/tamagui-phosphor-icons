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
      <_Path d="M112,112h32v32H112ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-64,96V112h32a8,8,0,0,0,0-16H160V64a8,8,0,0,0-16,0V96H112V64a8,8,0,0,0-16,0V96H64a8,8,0,0,0,0,16H96v32H64a8,8,0,0,0,0,16H96v32a8,8,0,0,0,16,0V160h32v32a8,8,0,0,0,16,0V160h32a8,8,0,0,0,0-16Z" />
    </_Svg>
  )
}

Icon.displayName = 'HashStraightFill'

export const HashStraightFill = memo<IconProps>(themed(Icon))
