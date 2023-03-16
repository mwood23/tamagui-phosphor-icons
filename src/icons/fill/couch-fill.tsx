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
      <_Path d="M248,120v48a16,16,0,0,1-16,16h-8v16a8,8,0,0,1-16,0V184H48v16a8,8,0,0,1-16,0V184H24A16,16,0,0,1,8,168V120a16,16,0,0,1,16-16h8a16,16,0,0,1,16,16v16a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V120a16,16,0,0,1,16-16h8A16,16,0,0,1,248,120Zm-56,0a32,32,0,0,1,32-32h12a4,4,0,0,0,4-4V72a16,16,0,0,0-16-16H140a4,4,0,0,0-4,4v68h56ZM20,88H32a32,32,0,0,1,32,32v8h56V60a4,4,0,0,0-4-4H32A16,16,0,0,0,16,72V84A4,4,0,0,0,20,88Z" />
    </_Svg>
  )
}

Icon.displayName = 'CouchFill'

export const CouchFill = memo<IconProps>(themed(Icon))
