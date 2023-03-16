import { useContext } from 'react'

import { ExcludeBold } from '../bold/exclude-bold'
import { ExcludeDuotone } from '../duotone/exclude-duotone'
import { ExcludeFill } from '../fill/exclude-fill'
import { ExcludeLight } from '../light/exclude-light'
import { ExcludeRegular } from '../regular/exclude-regular'
import { ExcludeThin } from '../thin/exclude-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ExcludeRegular,
  bold: ExcludeBold,
  duotone: ExcludeDuotone,
  fill: ExcludeFill,
  light: ExcludeLight,
  thin: ExcludeThin,
} as const

export const Exclude = (props: IconProps) => {
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
