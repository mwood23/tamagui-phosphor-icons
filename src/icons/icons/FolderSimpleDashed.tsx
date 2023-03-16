import { useContext } from 'react'

import { FolderSimpleDashedBold } from '../bold/folder-simple-dashed-bold'
import { FolderSimpleDashedDuotone } from '../duotone/folder-simple-dashed-duotone'
import { FolderSimpleDashedFill } from '../fill/folder-simple-dashed-fill'
import { FolderSimpleDashedLight } from '../light/folder-simple-dashed-light'
import { FolderSimpleDashedRegular } from '../regular/folder-simple-dashed-regular'
import { FolderSimpleDashedThin } from '../thin/folder-simple-dashed-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FolderSimpleDashedRegular,
  bold: FolderSimpleDashedBold,
  duotone: FolderSimpleDashedDuotone,
  fill: FolderSimpleDashedFill,
  light: FolderSimpleDashedLight,
  thin: FolderSimpleDashedThin,
} as const

export const FolderSimpleDashed = (props: IconProps) => {
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
