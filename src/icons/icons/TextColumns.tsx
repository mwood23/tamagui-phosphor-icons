import { useContext } from 'react'

import { TextColumnsBold } from '../bold/text-columns-bold'
import { TextColumnsDuotone } from '../duotone/text-columns-duotone'
import { TextColumnsFill } from '../fill/text-columns-fill'
import { TextColumnsLight } from '../light/text-columns-light'
import { TextColumnsRegular } from '../regular/text-columns-regular'
import { TextColumnsThin } from '../thin/text-columns-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: TextColumnsRegular,
  bold: TextColumnsBold,
  duotone: TextColumnsDuotone,
  fill: TextColumnsFill,
  light: TextColumnsLight,
  thin: TextColumnsThin,
} as const

export const TextColumns = (props: IconProps) => {
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
