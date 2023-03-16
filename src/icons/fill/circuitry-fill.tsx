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
      <_Path d="M88,111.31l48,48V220a4,4,0,0,1-4,4H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H68a4,4,0,0,1,4,4V153.38a24,24,0,1,0,16,0ZM80,184a8,8,0,1,0-8-8A8,8,0,0,0,80,184Zm104-80a8,8,0,1,0-8,8A8,8,0,0,0,184,104Zm24-72H156a4,4,0,0,0-4,4V68.69l13.66,13.66a24,24,0,1,1-11.31,11.31l-16-16A8,8,0,0,1,136,72V36a4,4,0,0,0-4-4H92a4,4,0,0,0-4,4V88.69l61.66,61.65A8,8,0,0,1,152,156v64a4,4,0,0,0,4,4h52a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z" />
    </_Svg>
  )
}

Icon.displayName = 'CircuitryFill'

export const CircuitryFill = memo<IconProps>(themed(Icon))
