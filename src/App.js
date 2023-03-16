import { render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import './App.css';
import road_races from './assets/data/tracks.json'
import header from './assets/imgs/header.jpg'


function App() {
  const [random, setRandom] = useState(0);
  const [pressed, setPressed] = useState(false);
  
  function getTrack() {
    setPressed(true)
    setRandom((Math.random() * (43 - 1) + 1).toFixed())
  };

  useEffect(() => {
    console.log(road_races.road_races[random].id)
  }, [random]);
  
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${header})`, backgroundPosition: 'center', backgroundSize: '300vh'}} >
      </header>
      <div className='body-div'>
        <button className='button button4' onClick={() => getTrack()}> Randomizar Pista </button>
        <div className='track-div'>
            {pressed
              ? <>
                  <p>{road_races.road_races[random].name}</p>
                  <img src={road_races.road_races[random].img} style={{ width: '100vh'}} />
                </>
              : <></>
            }
          </div>
      </div>
    </div>
  );
}
export default App;
