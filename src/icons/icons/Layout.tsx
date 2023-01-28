import { useContext } from 'react'

import { LayoutBold } from '../bold/layout-bold'
import { LayoutDuotone } from '../duotone/layout-duotone'
import { LayoutFill } from '../fill/layout-fill'
import { LayoutLight } from '../light/layout-light'
import { LayoutRegular } from '../regular/layout-regular'
import { LayoutThin } from '../thin/layout-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: LayoutRegular,
  bold: LayoutBold,
  duotone: LayoutDuotone,
  fill: LayoutFill,
  light: LayoutLight,
  thin: LayoutThin,
} as const

export const Layout = (props: IconProps) => {
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
