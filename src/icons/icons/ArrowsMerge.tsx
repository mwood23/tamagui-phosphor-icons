import { useContext } from 'react'

import { ArrowsMergeBold } from '../bold/arrows-merge-bold'
import { ArrowsMergeDuotone } from '../duotone/arrows-merge-duotone'
import { ArrowsMergeFill } from '../fill/arrows-merge-fill'
import { ArrowsMergeLight } from '../light/arrows-merge-light'
import { ArrowsMergeRegular } from '../regular/arrows-merge-regular'
import { ArrowsMergeThin } from '../thin/arrows-merge-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ArrowsMergeRegular,
  bold: ArrowsMergeBold,
  duotone: ArrowsMergeDuotone,
  fill: ArrowsMergeFill,
  light: ArrowsMergeLight,
  thin: ArrowsMergeThin,
} as const

export const ArrowsMerge = (props: IconProps) => {
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
