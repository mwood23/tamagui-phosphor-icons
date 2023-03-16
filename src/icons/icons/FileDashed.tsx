import { useContext } from 'react'

import { FileDashedBold } from '../bold/file-dashed-bold'
import { FileDashedDuotone } from '../duotone/file-dashed-duotone'
import { FileDashedFill } from '../fill/file-dashed-fill'
import { FileDashedLight } from '../light/file-dashed-light'
import { FileDashedRegular } from '../regular/file-dashed-regular'
import { FileDashedThin } from '../thin/file-dashed-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FileDashedRegular,
  bold: FileDashedBold,
  duotone: FileDashedDuotone,
  fill: FileDashedFill,
  light: FileDashedLight,
  thin: FileDashedThin,
} as const

export const FileDashed = (props: IconProps) => {
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
