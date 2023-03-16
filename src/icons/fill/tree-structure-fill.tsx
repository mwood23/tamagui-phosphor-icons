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
      <_Path d="M152,96V80h-8a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h8V160a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V192h-8a32,32,0,0,1-32-32V136H80v8a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V112A16,16,0,0,1,32,96H64a16,16,0,0,1,16,16v8h32V96a32,32,0,0,1,32-32h8V48a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V96a16,16,0,0,1-16,16H168A16,16,0,0,1,152,96Z" />
    </_Svg>
  )
}

Icon.displayName = 'TreeStructureFill'

export const TreeStructureFill = memo<IconProps>(themed(Icon))
