import React, {Component} from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleBoxClick = this.handleBoxClick.bind(this);
    }

    handleBoxClick() {
        this.props.boxClick(this.props.id);
    }

    render() {
        return (
            <div onClick={this.handleBoxClick} className="Box" style={{backgroundColor: this.props.color}}>

            </div>
        );
    }
}

export default Box;
