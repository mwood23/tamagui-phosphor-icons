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
        d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Path
        d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48"
        fill="none"
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </_Svg>
  )
}

Icon.displayName = 'PaypalLogoLight'

export const PaypalLogoLight = memo<IconProps>(themed(Icon))
