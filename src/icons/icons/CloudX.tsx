import { useContext } from 'react'

import { CloudXBold } from '../bold/cloud-x-bold'
import { CloudXDuotone } from '../duotone/cloud-x-duotone'
import { CloudXFill } from '../fill/cloud-x-fill'
import { CloudXLight } from '../light/cloud-x-light'
import { CloudXRegular } from '../regular/cloud-x-regular'
import { CloudXThin } from '../thin/cloud-x-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: CloudXRegular,
  bold: CloudXBold,
  duotone: CloudXDuotone,
  fill: CloudXFill,
  light: CloudXLight,
  thin: CloudXThin,
} as const

export const CloudX = (props: IconProps) => {
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
