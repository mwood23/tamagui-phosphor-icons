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
      <_Path d="M229.06,53.89a32.92,32.92,0,0,0-26.95-26.95c-32.38-5.49-93.39-8-138.27,36.9s-42.39,105.9-36.9,138.27a32.92,32.92,0,0,0,27,26.95A206.58,206.58,0,0,0,88.27,232c32.09,0,72.05-8,103.89-39.84C237.05,147.28,234.55,86.26,229.06,53.89ZM56.56,213.3A16.94,16.94,0,0,1,42.7,199.44a180.27,180.27,0,0,1-2.11-46.9l62.87,62.87A180.27,180.27,0,0,1,56.56,213.3ZM165.64,101.67,151.3,116l6.34,6.34a8,8,0,1,1-11.31,11.3L140,127.31,127.31,140l6.34,6.34a8,8,0,1,1-11.3,11.31L116,151.3l-14.34,14.34a8,8,0,1,1-11.31-11.31L104.7,140l-6.34-6.34a8,8,0,0,1,11.31-11.3l6.34,6.34L128.69,116l-6.34-6.34a8,8,0,0,1,11.3-11.31L140,104.7l14.34-14.34a8,8,0,1,1,11.31,11.31Zm49.77,1.79L152.54,40.59c4.76-.44,9.72-.69,14.91-.69a192,192,0,0,1,32,2.8A16.94,16.94,0,0,1,213.3,56.56,180.27,180.27,0,0,1,215.41,103.46Z" />
    </_Svg>
  )
}

Icon.displayName = 'FootballFill'

export const FootballFill = memo<IconProps>(themed(Icon))
