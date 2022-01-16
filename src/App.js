import { createRef, useState } from 'react';
import * as S from './App.styles';
import { InputDistance } from './components/InputDistance/InputDistance';
import { ResetButton } from './components/ResetButton/ResetButton';
import { ResultBox } from './components/ResultBox';
import { SelectNation } from './components/SelectNation/SelectNation';

const NATIONS = {
  GERMAN_USA: {
    id: 1,
    name: "Germany / USA",
    selected: false
  },
  SOVIET: {
    id: 2,
    name: "Soviet Union",
    selected: false
  }
}

function App() {
  const [distance, setDistance] = useState('')
  const [nations, setNations] = useState(Object.values(NATIONS))
  const input = createRef()

  const calculateAngleGermanUsa = (d) => {
    return (1002 - (d * 0.24))
  }

  const calculateAngleSoviet = (d) => {
    return (1142 - (d * 0.21))
  }

  const calculateAngle = () => {
    const selectedNation = nations.find(({ selected }) => selected)
    switch (selectedNation?.id) {
      case 1:
        return calculateAngleGermanUsa(distance)
      case 2:
        return calculateAngleSoviet(distance)
      default:
        return 0
    }
  }

  const handleReset = () => {
    setDistance('')
    input.current.focus()
  }

  const handleNationSelect = (countryId) => {
    const newNationState =
      nations.map(nation => nation.id === countryId ? { ...nation, selected: true } : { ...nation, selected: false })

    setNations(newNationState)
  }

  const handleDistance = (newDistance) => {
    const d = parseInt(newDistance)

    if (isNaN(d)) {
      setDistance('')
    }

    if (d > 1600) {
      setDistance(1600)
      return
    }

    setDistance(d)
  }

  return (
    <S.Container>
      <SelectNation nations={nations} onSelect={handleNationSelect} />
      <InputDistance
        type="number"
        value={distance}
        onChange={handleDistance}
        ref={input} />
      <ResultBox value={calculateAngle().toFixed(2)} />
      <ResetButton onClick={handleReset} />
    </S.Container>
  );
}

export default App;
