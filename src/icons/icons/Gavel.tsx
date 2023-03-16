import { useContext } from 'react'

import { GavelBold } from '../bold/gavel-bold'
import { GavelDuotone } from '../duotone/gavel-duotone'
import { GavelFill } from '../fill/gavel-fill'
import { GavelLight } from '../light/gavel-light'
import { GavelRegular } from '../regular/gavel-regular'
import { GavelThin } from '../thin/gavel-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: GavelRegular,
  bold: GavelBold,
  duotone: GavelDuotone,
  fill: GavelFill,
  light: GavelLight,
  thin: GavelThin,
} as const

export const Gavel = (props: IconProps) => {
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
