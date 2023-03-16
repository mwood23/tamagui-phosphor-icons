import { useContext } from 'react'

import { CodeBlockBold } from '../bold/code-block-bold'
import { CodeBlockDuotone } from '../duotone/code-block-duotone'
import { CodeBlockFill } from '../fill/code-block-fill'
import { CodeBlockLight } from '../light/code-block-light'
import { CodeBlockRegular } from '../regular/code-block-regular'
import { CodeBlockThin } from '../thin/code-block-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CodeBlockRegular,
  bold: CodeBlockBold,
  duotone: CodeBlockDuotone,
  fill: CodeBlockFill,
  light: CodeBlockLight,
  thin: CodeBlockThin,
} as const

export const CodeBlock = (props: IconProps) => {
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
