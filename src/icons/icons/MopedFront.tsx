import { useContext } from 'react'

import { MopedFrontBold } from '../bold/moped-front-bold'
import { MopedFrontDuotone } from '../duotone/moped-front-duotone'
import { MopedFrontFill } from '../fill/moped-front-fill'
import { MopedFrontLight } from '../light/moped-front-light'
import { MopedFrontRegular } from '../regular/moped-front-regular'
import { MopedFrontThin } from '../thin/moped-front-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: MopedFrontRegular,
  bold: MopedFrontBold,
  duotone: MopedFrontDuotone,
  fill: MopedFrontFill,
  light: MopedFrontLight,
  thin: MopedFrontThin,
} as const

export const MopedFront = (props: IconProps) => {
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
