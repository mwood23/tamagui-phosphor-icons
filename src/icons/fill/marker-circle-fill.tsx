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
      <_Path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM88,206.37V176h80v30.37A88.38,88.38,0,0,1,88,206.37ZM104,136h48v24H104Zm86.22,54.23c-2,2-4.08,3.87-6.22,5.64V176a16,16,0,0,0-16-16V136a16,16,0,0,0-13.74-15.82L143.6,73.3a16,16,0,0,0-31.2,0l-10.66,46.88A16,16,0,0,0,88,136v24a16,16,0,0,0-16,16v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'MarkerCircleFill'

export const MarkerCircleFill = memo<IconProps>(themed(Icon))
