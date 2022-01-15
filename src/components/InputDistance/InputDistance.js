import * as S from './InputDistance.styles'

export const InputDistance = ({ value, onChange }) => {
  return <S.Label>
    Distance (meters):
    <S.Input type='number' pattern="\d*" value={value} onChange={(event) => onChange(event.target.value)} />
  </S.Label>
}
