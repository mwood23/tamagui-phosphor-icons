import { useContext } from 'react'

import { FilmReelBold } from '../bold/film-reel-bold'
import { FilmReelDuotone } from '../duotone/film-reel-duotone'
import { FilmReelFill } from '../fill/film-reel-fill'
import { FilmReelLight } from '../light/film-reel-light'
import { FilmReelRegular } from '../regular/film-reel-regular'
import { FilmReelThin } from '../thin/film-reel-thin'
import { IconContext } from './IconContextProvider'
import { IconProps } from './IconProps'

const weightMap = {
  regular: FilmReelRegular,
  bold: FilmReelBold,
  duotone: FilmReelDuotone,
  fill: FilmReelFill,
  light: FilmReelLight,
  thin: FilmReelThin,
} as const

export const FilmReel = (props: IconProps) => {
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
