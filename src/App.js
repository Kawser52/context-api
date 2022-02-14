import logo from './logo.svg';
import './App.css';
import GrandFather from './component/GranFather/GrandFather';
import { useContext } from 'react';

export const RingContext = useContext('ring');

const ornaments = 'Diamond Ring'
function App() {
  
  return (
    <RingContext.Provider value = {ornaments}>
      <div className="App">
            <GrandFather></GrandFather>
      </div>
    </RingContext.Provider>
    
  );
}

export default App;
