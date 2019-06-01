import React, {Component} from 'react';

class Coin extends Component {
    static defaultProps = {
        isHeads: true,
        isGameStarted: false
    };

    render() {
        return (
            <div className="Coin">
                {this.props.isGameStarted ? <img
                    src={`http://www.nbp.pl/banknoty_i_monety/monety_obiegowe/img/001_2013_${this.props.isHeads ? 'R' : 'A'}.jpg`}
                    alt={this.props.isHeads ? 'heads' : 'tails'}/> : <p>Start flipping!</p>
                }
            </div>
        );
    }
}

export default Coin;
