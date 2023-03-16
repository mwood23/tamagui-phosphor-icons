import { useContext } from 'react'

import { CursorClickBold } from '../bold/cursor-click-bold'
import { CursorClickDuotone } from '../duotone/cursor-click-duotone'
import { CursorClickFill } from '../fill/cursor-click-fill'
import { CursorClickLight } from '../light/cursor-click-light'
import { CursorClickRegular } from '../regular/cursor-click-regular'
import { CursorClickThin } from '../thin/cursor-click-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CursorClickRegular,
  bold: CursorClickBold,
  duotone: CursorClickDuotone,
  fill: CursorClickFill,
  light: CursorClickLight,
  thin: CursorClickThin,
} as const

export const CursorClick = (props: IconProps) => {
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
