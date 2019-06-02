import React from 'react';
import './App.css';
import ScoreKeeper from "./ScoreKeeper";
import IconList from "./IconList";
import Lottery from "./Lottery";
import CoinFlipper from "./CoinFlipper";
import ColorBoxes from "./ColorBoxes";

function App() {
    return (
        <div className="App">
            <ColorBoxes/>
            <CoinFlipper/>
            <ScoreKeeper/>
            <IconList/>
            <Lottery/>
            <Lottery title="Polish Lotto" maxBalls={6} maxNum={49}/>
        </div>
    );
}

export default App;
