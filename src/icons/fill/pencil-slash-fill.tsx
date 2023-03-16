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
      <_Path d="M53.92,34.62A8,8,0,1,0,42.08,45.38l48.2,53L36.68,152A15.89,15.89,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l50.4-50.39,47.69,52.46a8,8,0,1,0,11.84-10.76Zm47.14,75.64L117,127.74,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188l48.41-48.41,15.89,17.48ZM227.32,96,183,140.34A8,8,0,0,1,171.67,129l14.68-14.68L169.66,97.66,156.31,111A8,8,0,0,1,145,99.69l13.35-13.35h0L141.66,69.66l-12,12a8,8,0,0,1-11.32-11.31L160,28.69a16,16,0,0,1,22.63,0l44.69,44.68A16,16,0,0,1,227.32,96Z" />
    </_Svg>
  )
}

Icon.displayName = 'PencilSlashFill'

export const PencilSlashFill = memo<IconProps>(themed(Icon))
