import { useContext } from 'react'

import { VirusBold } from '../bold/virus-bold'
import { VirusDuotone } from '../duotone/virus-duotone'
import { VirusFill } from '../fill/virus-fill'
import { VirusLight } from '../light/virus-light'
import { VirusRegular } from '../regular/virus-regular'
import { VirusThin } from '../thin/virus-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: VirusRegular,
  bold: VirusBold,
  duotone: VirusDuotone,
  fill: VirusFill,
  light: VirusLight,
  thin: VirusThin,
} as const

export const Virus = (props: IconProps) => {
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
