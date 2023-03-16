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
      <_Path d="M63.6,46.39a103.48,103.48,0,0,1,52-21.65,4,4,0,0,1,4.45,4V120H95.7A103.77,103.77,0,0,0,63.38,52.44,4,4,0,0,1,63.6,46.39ZM46,64.07a103.51,103.51,0,0,0-21.29,51.46,4,4,0,0,0,4,4.47H79.63A87.86,87.86,0,0,0,51.89,63.59,4,4,0,0,0,46,64.07ZM192.4,46.39a103.48,103.48,0,0,0-52-21.65,4,4,0,0,0-4.45,4V120h24.3a103.77,103.77,0,0,1,32.32-67.56A4,4,0,0,0,192.4,46.39Zm38.86,69.14A103.51,103.51,0,0,0,210,64.07a4,4,0,0,0-5.86-.48A87.86,87.86,0,0,0,176.37,120h50.91A4,4,0,0,0,231.26,115.53ZM24.74,140.47A103.51,103.51,0,0,0,46,191.93a4,4,0,0,0,5.86.48A87.86,87.86,0,0,0,79.63,136H28.72A4,4,0,0,0,24.74,140.47ZM210,191.93a103.51,103.51,0,0,0,21.29-51.46,4,4,0,0,0-4-4.47H176.37a87.86,87.86,0,0,0,27.74,56.41A4,4,0,0,0,210,191.93ZM63.6,209.61a103.48,103.48,0,0,0,52,21.65,4,4,0,0,0,4.45-4V136H95.7a103.77,103.77,0,0,1-32.32,67.56A4,4,0,0,0,63.6,209.61ZM160.3,136H136v91.28a4,4,0,0,0,4.45,4,103.48,103.48,0,0,0,52-21.65,4,4,0,0,0,.22-6.05A103.77,103.77,0,0,1,160.3,136Z" />
    </_Svg>
  )
}

Icon.displayName = 'BasketballFill'

export const BasketballFill = memo<IconProps>(themed(Icon))
