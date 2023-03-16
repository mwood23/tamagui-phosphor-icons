import { useContext } from 'react'

import { FileArchiveBold } from '../bold/file-archive-bold'
import { FileArchiveDuotone } from '../duotone/file-archive-duotone'
import { FileArchiveFill } from '../fill/file-archive-fill'
import { FileArchiveLight } from '../light/file-archive-light'
import { FileArchiveRegular } from '../regular/file-archive-regular'
import { FileArchiveThin } from '../thin/file-archive-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FileArchiveRegular,
  bold: FileArchiveBold,
  duotone: FileArchiveDuotone,
  fill: FileArchiveFill,
  light: FileArchiveLight,
  thin: FileArchiveThin,
} as const

export const FileArchive = (props: IconProps) => {
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
