import { useContext } from 'react'

import { ClipboardBold } from '../bold/clipboard-bold'
import { ClipboardDuotone } from '../duotone/clipboard-duotone'
import { ClipboardFill } from '../fill/clipboard-fill'
import { ClipboardLight } from '../light/clipboard-light'
import { ClipboardRegular } from '../regular/clipboard-regular'
import { ClipboardThin } from '../thin/clipboard-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ClipboardRegular,
  bold: ClipboardBold,
  duotone: ClipboardDuotone,
  fill: ClipboardFill,
  light: ClipboardLight,
  thin: ClipboardThin,
} as const

export const Clipboard = (props: IconProps) => {
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
