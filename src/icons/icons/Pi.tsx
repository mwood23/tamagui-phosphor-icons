import { useContext } from 'react'

import { PiBold } from '../bold/pi-bold'
import { PiDuotone } from '../duotone/pi-duotone'
import { PiFill } from '../fill/pi-fill'
import { PiLight } from '../light/pi-light'
import { PiRegular } from '../regular/pi-regular'
import { PiThin } from '../thin/pi-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PiRegular,
  bold: PiBold,
  duotone: PiDuotone,
  fill: PiFill,
  light: PiLight,
  thin: PiThin,
} as const

export const Pi = (props: IconProps) => {
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    style: contextStyle,
  } = useContext(IconContext)

  const {
    color = contextColor ?? 'black',
    size = contextSize ?? 24,
    weight = contextWeight ?? 'regular',
    style = contextStyle ?? {},
    ...otherProps
  } = props

  const Component = weightMap[weight]

  return (
    <Component
      color={color}
      size={size}
      weight={weight}
      style={style}
      {...otherProps}
    />
  )
}
