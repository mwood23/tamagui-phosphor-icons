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
      <_Path d="M248,103.47A8.17,8.17,0,0,0,239.73,96h-9.26l-9.29-43.35A16.08,16.08,0,0,0,205.53,40H50.47A16.08,16.08,0,0,0,34.82,52.65L25.53,96H16.27A8.17,8.17,0,0,0,8,103.47,8,8,0,0,0,16,112h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h20a4,4,0,0,0,4-4V136.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v44a4,4,0,0,0,4,4h8a4,4,0,0,0,4-4V136.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v44a4,4,0,0,0,4,4h20v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V112h8A8,8,0,0,0,248,103.47ZM68,152a12,12,0,1,1,12-12A12,12,0,0,1,68,152Zm120,0a12,12,0,1,1,12-12A12,12,0,0,1,188,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'JeepFill'

export const JeepFill = memo<IconProps>(themed(Icon))
