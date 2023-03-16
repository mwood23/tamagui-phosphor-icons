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
      <_Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM87.54,154.69l-20,56a8,8,0,0,1-15.07,0l-20-56a8,8,0,0,1,15.07-5.38L60,184.21l12.47-34.9a8,8,0,0,1,15.07,5.38ZM184,160v12h16a8,8,0,0,1,0,16H184v12h24a8,8,0,0,1,0,16H176a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16Zm-32-8v38a26,26,0,0,1-52,0V152a8,8,0,0,1,16,0v38a10,10,0,0,0,20,0V152a8,8,0,0,1,16,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'FileVueFill'

export const FileVueFill = memo<IconProps>(themed(Icon))
