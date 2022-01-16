import { forwardRef } from 'react'
import * as S from './InputDistance.styles'

export const InputDistance = forwardRef(({ value, onChange }, ref) => {
  return <S.Label>
    Distance (meters):
    <S.Input
      type='number'
      pattern="\d*"
      value={value}
      onChange={(event) => onChange(event.target.value)} 
      ref={ref}/>
  </S.Label>
})
