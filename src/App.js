import logo from './logo.svg';
import './App.css';
import GrandFather from './component/GranFather/GrandFather';
import { createContext, useContext } from 'react';
import Special from './component/Special/Special';

export const RingContext = createContext('ring');


function App() {
  const ornaments = 'Diamond Ring';
  return (
    <RingContext.Provider value = {ornaments}>
      <div className="App">
            <GrandFather></GrandFather>
            <Special></Special>
      </div>
    </RingContext.Provider>
    
  );
}

export default App;
