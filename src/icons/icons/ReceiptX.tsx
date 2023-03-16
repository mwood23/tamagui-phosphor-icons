import { useContext } from 'react'

import { ReceiptXBold } from '../bold/receipt-x-bold'
import { ReceiptXDuotone } from '../duotone/receipt-x-duotone'
import { ReceiptXFill } from '../fill/receipt-x-fill'
import { ReceiptXLight } from '../light/receipt-x-light'
import { ReceiptXRegular } from '../regular/receipt-x-regular'
import { ReceiptXThin } from '../thin/receipt-x-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: ReceiptXRegular,
  bold: ReceiptXBold,
  duotone: ReceiptXDuotone,
  fill: ReceiptXFill,
  light: ReceiptXLight,
  thin: ReceiptXThin,
} as const

export const ReceiptX = (props: IconProps) => {
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
