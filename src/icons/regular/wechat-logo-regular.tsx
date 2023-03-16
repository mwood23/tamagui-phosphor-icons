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
    <_Svg viewBox="0 0 256 256" {...otherProps} height={size} width={size}>
      <_Rect width="256" height="256" fill="none" />
      <_Path
        d="M160,224a72,72,0,1,1,63.23-37.53l8.53,29.87a6,6,0,0,1-7.42,7.42l-29.87-8.53A71.71,71.71,0,0,1,160,224Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Path
        d="M92.06,175.89a71.51,71.51,0,0,1-30.53-8.66l-29.87,8.53a6,6,0,0,1-7.42-7.42l8.53-29.87A72,72,0,1,1,163.94,80.11"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="132" cy="140" r="12" fill={`${color}`} />
      <_Circle cx="188" cy="140" r="12" fill={`${color}`} />
    </_Svg>
  )
}

Icon.displayName = 'WechatLogoRegular'

export const WechatLogoRegular = memo<IconProps>(themed(Icon))
