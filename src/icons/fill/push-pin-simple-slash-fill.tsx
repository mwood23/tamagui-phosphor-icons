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
      <_Path d="M213.4,221.9A8.2,8.2,0,0,1,208,224a8,8,0,0,1-5.9-2.6l-34-37.4H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.3L66.2,72,42.1,45.4A8,8,0,0,1,53.9,34.6l75.2,82.8,48.5,53.2h0l36.3,40A7.9,7.9,0,0,1,213.4,221.9Zm-22.9-60.8a7.9,7.9,0,0,0,5.9,2.6,8.5,8.5,0,0,0,3.5-.8,8.1,8.1,0,0,0,4.4-8.6L185.5,48H192a8,8,0,0,0,0-16H91.2A8,8,0,0,0,86,34a9.4,9.4,0,0,0-1,1,8.3,8.3,0,0,0-1.7,4.5,1.1,1.1,0,0,0,0,.8,7.9,7.9,0,0,0,2,5.1Z" />
    </_Svg>
  )
}

Icon.displayName = 'PushPinSimpleSlashFill'

export const PushPinSimpleSlashFill = memo<IconProps>(themed(Icon))
