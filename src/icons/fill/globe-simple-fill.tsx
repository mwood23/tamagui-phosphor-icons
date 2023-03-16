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
      <_Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM96.23,136h63.54c-1.68,30.87-13,59.62-31.77,79.89C109.27,195.62,97.91,166.87,96.23,136Zm0-16c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm54.45,93c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z" />
    </_Svg>
  )
}

Icon.displayName = 'GlobeSimpleFill'

export const GlobeSimpleFill = memo<IconProps>(themed(Icon))
