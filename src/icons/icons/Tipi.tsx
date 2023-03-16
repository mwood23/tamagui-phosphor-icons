import { useContext } from 'react'

import { TipiBold } from '../bold/tipi-bold'
import { TipiDuotone } from '../duotone/tipi-duotone'
import { TipiFill } from '../fill/tipi-fill'
import { TipiLight } from '../light/tipi-light'
import { TipiRegular } from '../regular/tipi-regular'
import { TipiThin } from '../thin/tipi-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TipiRegular,
  bold: TipiBold,
  duotone: TipiDuotone,
  fill: TipiFill,
  light: TipiLight,
  thin: TipiThin,
} as const

export const Tipi = (props: IconProps) => {
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
