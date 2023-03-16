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
      <_Path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-38.37-42.2-61.86,66.28a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l39.18-42L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-34.14-61.34a8,8,0,0,0,5.86,2.62h.06a8,8,0,0,0,5.85-2.55l22.3-23.89a8,8,0,0,0-3-12.95L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7L108.27,59.7a8,8,0,0,0-.07,10.84Z" />
    </_Svg>
  )
}

Icon.displayName = 'LightningSlashFill'

export const LightningSlashFill = memo<IconProps>(themed(Icon))
