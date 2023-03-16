import { useContext } from 'react'

import { FileSqlBold } from '../bold/file-sql-bold'
import { FileSqlDuotone } from '../duotone/file-sql-duotone'
import { FileSqlFill } from '../fill/file-sql-fill'
import { FileSqlLight } from '../light/file-sql-light'
import { FileSqlRegular } from '../regular/file-sql-regular'
import { FileSqlThin } from '../thin/file-sql-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FileSqlRegular,
  bold: FileSqlBold,
  duotone: FileSqlDuotone,
  fill: FileSqlFill,
  light: FileSqlLight,
  thin: FileSqlThin,
} as const

export const FileSql = (props: IconProps) => {
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
