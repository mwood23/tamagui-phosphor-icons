import { useContext } from 'react'

import { SignatureBold } from '../bold/signature-bold'
import { SignatureDuotone } from '../duotone/signature-duotone'
import { SignatureFill } from '../fill/signature-fill'
import { SignatureLight } from '../light/signature-light'
import { SignatureRegular } from '../regular/signature-regular'
import { SignatureThin } from '../thin/signature-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: SignatureRegular,
  bold: SignatureBold,
  duotone: SignatureDuotone,
  fill: SignatureFill,
  light: SignatureLight,
  thin: SignatureThin,
} as const

export const Signature = (props: IconProps) => {
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
