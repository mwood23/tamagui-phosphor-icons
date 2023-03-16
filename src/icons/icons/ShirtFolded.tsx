import { useContext } from 'react'

import { ShirtFoldedBold } from '../bold/shirt-folded-bold'
import { ShirtFoldedDuotone } from '../duotone/shirt-folded-duotone'
import { ShirtFoldedFill } from '../fill/shirt-folded-fill'
import { ShirtFoldedLight } from '../light/shirt-folded-light'
import { ShirtFoldedRegular } from '../regular/shirt-folded-regular'
import { ShirtFoldedThin } from '../thin/shirt-folded-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ShirtFoldedRegular,
  bold: ShirtFoldedBold,
  duotone: ShirtFoldedDuotone,
  fill: ShirtFoldedFill,
  light: ShirtFoldedLight,
  thin: ShirtFoldedThin,
} as const

export const ShirtFolded = (props: IconProps) => {
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
