import { useContext } from 'react'

import { TreeStructureBold } from '../bold/tree-structure-bold'
import { TreeStructureDuotone } from '../duotone/tree-structure-duotone'
import { TreeStructureFill } from '../fill/tree-structure-fill'
import { TreeStructureLight } from '../light/tree-structure-light'
import { TreeStructureRegular } from '../regular/tree-structure-regular'
import { TreeStructureThin } from '../thin/tree-structure-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TreeStructureRegular,
  bold: TreeStructureBold,
  duotone: TreeStructureDuotone,
  fill: TreeStructureFill,
  light: TreeStructureLight,
  thin: TreeStructureThin,
} as const

export const TreeStructure = (props: IconProps) => {
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
