import { useContext } from 'react'

import { TreePalmBold } from '../bold/tree-palm-bold'
import { TreePalmDuotone } from '../duotone/tree-palm-duotone'
import { TreePalmFill } from '../fill/tree-palm-fill'
import { TreePalmLight } from '../light/tree-palm-light'
import { TreePalmRegular } from '../regular/tree-palm-regular'
import { TreePalmThin } from '../thin/tree-palm-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TreePalmRegular,
  bold: TreePalmBold,
  duotone: TreePalmDuotone,
  fill: TreePalmFill,
  light: TreePalmLight,
  thin: TreePalmThin,
} as const

export const TreePalm = (props: IconProps) => {
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
