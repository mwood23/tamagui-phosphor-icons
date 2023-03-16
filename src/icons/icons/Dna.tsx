import { useContext } from 'react'

import { DnaBold } from '../bold/dna-bold'
import { DnaDuotone } from '../duotone/dna-duotone'
import { DnaFill } from '../fill/dna-fill'
import { DnaLight } from '../light/dna-light'
import { DnaRegular } from '../regular/dna-regular'
import { DnaThin } from '../thin/dna-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: DnaRegular,
  bold: DnaBold,
  duotone: DnaDuotone,
  fill: DnaFill,
  light: DnaLight,
  thin: DnaThin,
} as const

export const Dna = (props: IconProps) => {
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
