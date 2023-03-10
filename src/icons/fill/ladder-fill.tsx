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
      <_Path d="M215.5,213.3,164.5,73l9.1-25H184a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h4.6L32.5,213.3a7.9,7.9,0,0,0,4.8,10.2,8.6,8.6,0,0,0,2.7.5,7.9,7.9,0,0,0,7.5-5.3L57.2,192h47l-7.7,21.3a7.9,7.9,0,0,0,4.8,10.2,8.6,8.6,0,0,0,2.7.5,7.9,7.9,0,0,0,7.5-5.3L130,168h52l18.5,50.7A7.9,7.9,0,0,0,208,224a8.6,8.6,0,0,0,2.7-.5A7.9,7.9,0,0,0,215.5,213.3Zm-88-85.3h-47L92.1,96h47Zm29.1-80-8.1,22.3h0L144.9,80H98l11.6-32ZM63.1,176l11.6-32h47L110,176Zm72.7-24L156,96.4,176.2,152Z" />
    </_Svg>
  )
}

Icon.displayName = 'LadderFill'

export const LadderFill = memo<IconProps>(themed(Icon))
