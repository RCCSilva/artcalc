import { useState } from 'react';

function App() {
  const [distance, setDistance] = useState(0)

  const calculateAngle = () => {
    return 1004 - (distance * 0.24)
  }

  return (
    <div className="App">
     <input type="number" value={distance} onChange={(event) => setDistance(event.target.value)}/>
     <div>{calculateAngle()}</div>
    </div>
  );
}

export default App;
