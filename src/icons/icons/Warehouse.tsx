import { useContext } from 'react'

import { WarehouseBold } from '../bold/warehouse-bold'
import { WarehouseDuotone } from '../duotone/warehouse-duotone'
import { WarehouseFill } from '../fill/warehouse-fill'
import { WarehouseLight } from '../light/warehouse-light'
import { WarehouseRegular } from '../regular/warehouse-regular'
import { WarehouseThin } from '../thin/warehouse-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: WarehouseRegular,
  bold: WarehouseBold,
  duotone: WarehouseDuotone,
  fill: WarehouseFill,
  light: WarehouseLight,
  thin: WarehouseThin,
} as const

export const Warehouse = (props: IconProps) => {
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
