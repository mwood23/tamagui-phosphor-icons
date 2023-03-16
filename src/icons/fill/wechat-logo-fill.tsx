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
      <_Path d="M231.79,187.33A80,80,0,0,0,169.58,72.59,80,80,0,1,0,24.21,139.33l-7.66,26.82A14,14,0,0,0,30,184a13.65,13.65,0,0,0,3.84-.54l26.82-7.66a78.86,78.86,0,0,0,25.77,7.63,80,80,0,0,0,108.89,40.37l26.82,7.66a14,14,0,0,0,17.3-17.3ZM132,152a12,12,0,1,1,12-12A12,12,0,0,1,132,152Zm-52,0a79.31,79.31,0,0,0,1.31,14.3,63.34,63.34,0,0,1-16-6.09,8,8,0,0,0-6-.68l-26.41,7.55,7.55-26.41a8,8,0,0,0-.68-6A64,64,0,0,1,151.68,72.43,80.12,80.12,0,0,0,80,152Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'WechatLogoFill'

export const WechatLogoFill = memo<IconProps>(themed(Icon))
