import { useContext } from 'react'

import { ChurchBold } from '../bold/church-bold'
import { ChurchDuotone } from '../duotone/church-duotone'
import { ChurchFill } from '../fill/church-fill'
import { ChurchLight } from '../light/church-light'
import { ChurchRegular } from '../regular/church-regular'
import { ChurchThin } from '../thin/church-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ChurchRegular,
  bold: ChurchBold,
  duotone: ChurchDuotone,
  fill: ChurchFill,
  light: ChurchLight,
  thin: ChurchThin,
} as const

export const Church = (props: IconProps) => {
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
