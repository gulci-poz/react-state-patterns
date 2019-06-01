import React, {Component} from 'react';

class CoinCounter extends Component {
    static defaultProps = {
        headsCount: 0,
        tailsCount: 0
    };

    render() {
        return (
            <div className="CoinCounter">
                <br/>
                <span>Total flips: {this.props.headsCount + this.props.tailsCount}</span>
                <br/>
                <span>Heads: {this.props.headsCount}</span>
                <br/>
                <span>Tails: {this.props.tailsCount}</span>
            </div>
        );
    }
}

export default CoinCounter;
