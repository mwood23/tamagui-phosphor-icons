import { useContext } from 'react'

import { SealCheckBold } from '../bold/seal-check-bold'
import { SealCheckDuotone } from '../duotone/seal-check-duotone'
import { SealCheckFill } from '../fill/seal-check-fill'
import { SealCheckLight } from '../light/seal-check-light'
import { SealCheckRegular } from '../regular/seal-check-regular'
import { SealCheckThin } from '../thin/seal-check-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SealCheckRegular,
  bold: SealCheckBold,
  duotone: SealCheckDuotone,
  fill: SealCheckFill,
  light: SealCheckLight,
  thin: SealCheckThin,
} as const

export const SealCheck = (props: IconProps) => {
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
