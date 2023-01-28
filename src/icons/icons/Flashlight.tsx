import { useContext } from 'react'

import { FlashlightBold } from '../bold/flashlight-bold'
import { FlashlightDuotone } from '../duotone/flashlight-duotone'
import { FlashlightFill } from '../fill/flashlight-fill'
import { FlashlightLight } from '../light/flashlight-light'
import { FlashlightRegular } from '../regular/flashlight-regular'
import { FlashlightThin } from '../thin/flashlight-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FlashlightRegular,
  bold: FlashlightBold,
  duotone: FlashlightDuotone,
  fill: FlashlightFill,
  light: FlashlightLight,
  thin: FlashlightThin,
} as const

export const Flashlight = (props: IconProps) => {
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
