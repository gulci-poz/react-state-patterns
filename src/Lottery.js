import React, {Component} from 'react';
import Ball from "./Ball";
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    };

    constructor(props) {
        super(props);
        this.state = {nums: Array.from({length: this.props.numBalls})};
        this.handleGenerateClick = this.handleGenerateClick.bind(this);
    }

    generate() {
        const newNums = [];
        while (newNums.length < this.props.numBalls) {
            const num = Math.floor(Math.random() * this.props.maxNum) + 1;
            if (newNums.indexOf(num) === -1) {
                newNums.push(num);
            }
        }
        newNums.sort((a, b) => a - b);
        this.setState({nums: newNums});
    }

    handleGenerateClick() {
        this.generate();
    }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map((n, i) => <Ball num={n} key={`${i}_${n}`}/>)}
                </div>
                <button onClick={this.handleGenerateClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;
