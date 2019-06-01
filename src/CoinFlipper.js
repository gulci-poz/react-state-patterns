import React, {Component} from 'react';
import Coin from "./Coin";
import CoinCounter from "./CoinCounter";

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.handleFlipCoinClick = this.handleFlipCoinClick.bind(this);
        this.state = {
            isHeads: true,
            headsCount: 0,
            tailsCount: 0,
            isGameStarted: false
        };
    }

    handleFlipCoinClick() {
        this.flipCoin();
    }

    flipCoin() {
        const flipResult = Math.floor(Math.random() * 2);
        this.setState(currentState => ({
                isHeads: flipResult === 0,
                headsCount: currentState.headsCount + (flipResult === 0 ? 1 : 0),
                tailsCount: currentState.tailsCount + (flipResult === 1 ? 1 : 0),
                isGameStarted: true
            })
        );
    }

    render() {
        return (
            <div className="CoinFlipper">
                <h1>Coin Flipper</h1>
                <Coin isHeads={this.state.isHeads} isGameStarted={this.state.isGameStarted}/>
                <button onClick={this.handleFlipCoinClick}>Flip the coin</button>
                <CoinCounter headsCount={this.state.headsCount} tailsCount={this.state.tailsCount}/>
            </div>
        );
    }
}

export default CoinFlipper;
