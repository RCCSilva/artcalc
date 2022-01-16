import * as S from './SelectNation.styles'

export const SelectNation = ({ nations, onSelect }) => {

  return <S.Container>
    {nations.map(nation => (
      <S.Button
        key={nation.id}
        selected={nation.selected}
        onClick={() => onSelect(nation.id)}>
        {nation.name}
      </S.Button>
    ))}
    
  </S.Container>

}
