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
      <_Path d="M39.4,18.6a7.9,7.9,0,0,0-11.3-.5,8,8,0,0,0-.6,11.3L51.7,56H48A24.1,24.1,0,0,0,24,80V192a24.1,24.1,0,0,0,24,24H197.2l19.4,21.4a8.2,8.2,0,0,0,5.9,2.6,7.8,7.8,0,0,0,5.4-2.1,8,8,0,0,0,.6-11.3ZM128,168a36,36,0,0,1-36-36,36.4,36.4,0,0,1,8.1-22.8L148,161.9A35.3,35.3,0,0,1,128,168Z" />
      <_Path d="M208,56H180.3L166.6,35.6A7.6,7.6,0,0,0,160,32H96a7.9,7.9,0,0,0-6.7,3.6l-2,3a8,8,0,0,0,.8,9.8l130,143A7.9,7.9,0,0,0,224,194a7.4,7.4,0,0,0,2.9-.5A8,8,0,0,0,232,186V80A24.1,24.1,0,0,0,208,56Z" />
    </_Svg>
  )
}

Icon.displayName = 'CameraSlashFill'

export const CameraSlashFill = memo<IconProps>(themed(Icon))
