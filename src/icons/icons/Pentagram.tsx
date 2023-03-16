import { useContext } from 'react'

import { PentagramBold } from '../bold/pentagram-bold'
import { PentagramDuotone } from '../duotone/pentagram-duotone'
import { PentagramFill } from '../fill/pentagram-fill'
import { PentagramLight } from '../light/pentagram-light'
import { PentagramRegular } from '../regular/pentagram-regular'
import { PentagramThin } from '../thin/pentagram-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: PentagramRegular,
  bold: PentagramBold,
  duotone: PentagramDuotone,
  fill: PentagramFill,
  light: PentagramLight,
  thin: PentagramThin,
} as const

export const Pentagram = (props: IconProps) => {
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
