import { useContext } from 'react'

import { FileSvgBold } from '../bold/file-svg-bold'
import { FileSvgDuotone } from '../duotone/file-svg-duotone'
import { FileSvgFill } from '../fill/file-svg-fill'
import { FileSvgLight } from '../light/file-svg-light'
import { FileSvgRegular } from '../regular/file-svg-regular'
import { FileSvgThin } from '../thin/file-svg-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FileSvgRegular,
  bold: FileSvgBold,
  duotone: FileSvgDuotone,
  fill: FileSvgFill,
  light: FileSvgLight,
  thin: FileSvgThin,
} as const

export const FileSvg = (props: IconProps) => {
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
