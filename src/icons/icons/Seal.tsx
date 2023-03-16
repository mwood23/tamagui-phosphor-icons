import { useContext } from 'react'

import { SealBold } from '../bold/seal-bold'
import { SealDuotone } from '../duotone/seal-duotone'
import { SealFill } from '../fill/seal-fill'
import { SealLight } from '../light/seal-light'
import { SealRegular } from '../regular/seal-regular'
import { SealThin } from '../thin/seal-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SealRegular,
  bold: SealBold,
  duotone: SealDuotone,
  fill: SealFill,
  light: SealLight,
  thin: SealThin,
} as const

export const Seal = (props: IconProps) => {
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
