import { useState } from 'react';
import * as S from './App.styles';
import { InputDistance } from './components/InputDistance/InputDistance';
import { ResultBox } from './components/ResultBox';

function App() {
  const [distance, setDistance] = useState(0)

  const calculateAngle = () => {
    return (1004 - (distance * 0.24)).toFixed(2)
  }

  return (
    <S.Container>
     <InputDistance type="number" value={distance} onChange={setDistance}/>
     <ResultBox value={calculateAngle()} />
    </S.Container>
  );
}

export default App;
