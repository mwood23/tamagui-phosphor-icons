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
      <_Path d="M201.5,54.5a103.8,103.8,0,0,0-147,0,103.8,103.8,0,0,0,0,147,103.8,103.8,0,0,0,147,0,103.8,103.8,0,0,0,0-147ZM128,170.9a31.9,31.9,0,0,0-32.3-9.8L111,128h34l15.3,33.1a31.9,31.9,0,0,0-32.3,9.8Zm40,35.5a89,89,0,0,1-32,9.2V192a16,16,0,0,1,32,0Zm22.2-16.2c-2,2-4.1,3.9-6.2,5.7V176a9.8,9.8,0,0,0-.7-3.4l-48-104h-.1a4.1,4.1,0,0,0-.5-.9c0-.1,0-.1-.1-.2l-.5-.7H134a4.6,4.6,0,0,0-.7-.7h-.2l-.7-.6h-.2l-.8-.5h-.1l-.9-.3h-.3l-.9-.2h-2.4l-1,.2h-.2l-.8.3h-.2l-.9.4h-.1l-.7.6h-.2l-.7.7h-.1l-.5.7-.2.2a4.1,4.1,0,0,1-.5.9l-22.1,48h0L72.7,172.6A9.8,9.8,0,0,0,72,176v19.9c-2.1-1.8-4.2-3.7-6.2-5.7a88,88,0,1,1,124.4,0Z" />
    </_Svg>
  )
}

Icon.displayName = 'PencilCircleFill'

export const PencilCircleFill = memo<IconProps>(themed(Icon))
