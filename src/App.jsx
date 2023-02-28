import { useState } from 'react';
import './App.css';
import ChartContainer from './assets/components/ChartContainer/ChartContainer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ChartContainer />
    </div>
  );
}

export default App;
