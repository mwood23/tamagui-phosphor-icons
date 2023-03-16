import { useContext } from 'react'

import { SigmaBold } from '../bold/sigma-bold'
import { SigmaDuotone } from '../duotone/sigma-duotone'
import { SigmaFill } from '../fill/sigma-fill'
import { SigmaLight } from '../light/sigma-light'
import { SigmaRegular } from '../regular/sigma-regular'
import { SigmaThin } from '../thin/sigma-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SigmaRegular,
  bold: SigmaBold,
  duotone: SigmaDuotone,
  fill: SigmaFill,
  light: SigmaLight,
  thin: SigmaThin,
} as const

export const Sigma = (props: IconProps) => {
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
