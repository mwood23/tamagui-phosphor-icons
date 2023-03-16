import { useContext } from 'react'

import { FolderDashedBold } from '../bold/folder-dashed-bold'
import { FolderDashedDuotone } from '../duotone/folder-dashed-duotone'
import { FolderDashedFill } from '../fill/folder-dashed-fill'
import { FolderDashedLight } from '../light/folder-dashed-light'
import { FolderDashedRegular } from '../regular/folder-dashed-regular'
import { FolderDashedThin } from '../thin/folder-dashed-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FolderDashedRegular,
  bold: FolderDashedBold,
  duotone: FolderDashedDuotone,
  fill: FolderDashedFill,
  light: FolderDashedLight,
  thin: FolderDashedThin,
} as const

export const FolderDashed = (props: IconProps) => {
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
