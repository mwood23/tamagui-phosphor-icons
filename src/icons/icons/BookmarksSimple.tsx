import { useContext } from 'react'

import { BookmarksSimpleBold } from '../bold/bookmarks-simple-bold'
import { BookmarksSimpleDuotone } from '../duotone/bookmarks-simple-duotone'
import { BookmarksSimpleFill } from '../fill/bookmarks-simple-fill'
import { BookmarksSimpleLight } from '../light/bookmarks-simple-light'
import { BookmarksSimpleRegular } from '../regular/bookmarks-simple-regular'
import { BookmarksSimpleThin } from '../thin/bookmarks-simple-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: BookmarksSimpleRegular,
  bold: BookmarksSimpleBold,
  duotone: BookmarksSimpleDuotone,
  fill: BookmarksSimpleFill,
  light: BookmarksSimpleLight,
  thin: BookmarksSimpleThin,
} as const

export const BookmarksSimple = (props: IconProps) => {
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
