import { useContext } from 'react'

import { WebcamSlashBold } from '../bold/webcam-slash-bold'
import { WebcamSlashDuotone } from '../duotone/webcam-slash-duotone'
import { WebcamSlashFill } from '../fill/webcam-slash-fill'
import { WebcamSlashLight } from '../light/webcam-slash-light'
import { WebcamSlashRegular } from '../regular/webcam-slash-regular'
import { WebcamSlashThin } from '../thin/webcam-slash-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: WebcamSlashRegular,
  bold: WebcamSlashBold,
  duotone: WebcamSlashDuotone,
  fill: WebcamSlashFill,
  light: WebcamSlashLight,
  thin: WebcamSlashThin,
} as const

export const WebcamSlash = (props: IconProps) => {
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
