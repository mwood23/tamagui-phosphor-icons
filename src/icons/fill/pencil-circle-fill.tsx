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
      <_Path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM128,170.87a31.93,31.93,0,0,0-32.31-9.77L111,128H145l15.27,33.1A31.93,31.93,0,0,0,128,170.87Zm40,35.5a88,88,0,0,1-32,9.22V192a16,16,0,0,1,32,0Zm22.22-16.14c-2,2-4.08,3.87-6.22,5.64V176a7.91,7.91,0,0,0-.74-3.35l-48-104a8,8,0,0,0-14.52,0l-48,104A7.91,7.91,0,0,0,72,176v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'PencilCircleFill'

export const PencilCircleFill = memo<IconProps>(themed(Icon))
