import { useContext } from 'react'

import { FlagPennantBold } from '../bold/flag-pennant-bold'
import { FlagPennantDuotone } from '../duotone/flag-pennant-duotone'
import { FlagPennantFill } from '../fill/flag-pennant-fill'
import { FlagPennantLight } from '../light/flag-pennant-light'
import { FlagPennantRegular } from '../regular/flag-pennant-regular'
import { FlagPennantThin } from '../thin/flag-pennant-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FlagPennantRegular,
  bold: FlagPennantBold,
  duotone: FlagPennantDuotone,
  fill: FlagPennantFill,
  light: FlagPennantLight,
  thin: FlagPennantThin,
} as const

export const FlagPennant = (props: IconProps) => {
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
