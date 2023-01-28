import { useContext } from 'react'

import { FilePngBold } from '../bold/file-png-bold'
import { FilePngDuotone } from '../duotone/file-png-duotone'
import { FilePngFill } from '../fill/file-png-fill'
import { FilePngLight } from '../light/file-png-light'
import { FilePngRegular } from '../regular/file-png-regular'
import { FilePngThin } from '../thin/file-png-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FilePngRegular,
  bold: FilePngBold,
  duotone: FilePngDuotone,
  fill: FilePngFill,
  light: FilePngLight,
  thin: FilePngThin,
} as const

export const FilePng = (props: IconProps) => {
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
