import { useContext } from 'react'

import { CrownBold } from '../bold/crown-bold'
import { CrownDuotone } from '../duotone/crown-duotone'
import { CrownFill } from '../fill/crown-fill'
import { CrownLight } from '../light/crown-light'
import { CrownRegular } from '../regular/crown-regular'
import { CrownThin } from '../thin/crown-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CrownRegular,
  bold: CrownBold,
  duotone: CrownDuotone,
  fill: CrownFill,
  light: CrownLight,
  thin: CrownThin,
} as const

export const Crown = (props: IconProps) => {
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
