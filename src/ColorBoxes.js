import React, {Component} from 'react';
import Box from "./Box";

class ColorBoxes extends Component {
    static defaultProps = {
        colors: [
            'red', 'green', 'blue', 'yellow', 'orange', 'black', 'darkblue', 'darkgreen',
            'olive', 'sienna', 'brown', 'maroon', 'gold', 'khaki', 'cyan', 'pink',
            'crimson', 'lavender', 'moccasin', 'navy', 'indigo', 'gainsboro', 'tomato', 'chocolate'
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                'red', 'green', 'blue', 'yellow', 'orange', 'black', 'darkblue', 'darkgreen',
                'olive', 'sienna', 'brown', 'maroon', 'gold', 'khaki', 'cyan', 'pink',
                'crimson', 'lavender', 'moccasin', 'navy', 'indigo', 'gainsboro', 'tomato', 'chocolate'
            ]
        };
        this.handleBoxClick = this.handleBoxClick.bind(this);
    }

    handleBoxClick(id) {
        this.boxClick(id);
    }

    boxClick(id) {
        let neighbours = [
            this.state.boxes[id],
            id % 8 > 0 && this.state.boxes[id - 1],
            id - 8 >= 0 && this.state.boxes[id - 8],
            id % 8 < 7 && this.state.boxes[id + 1],
            id + 8 < this.state.boxes.length - 1 && this.state.boxes[id + 8]
        ];
        neighbours = neighbours.filter(n => n !== false);

        let newColor = neighbours[0];
        while (neighbours.indexOf(newColor) !== -1) {
            newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }

        const newBoxes = [...this.state.boxes];
        newBoxes[id] = newColor;

        this.setState({boxes: newBoxes})
    }

    render() {
        return (
            <div className="ColorBoxes">
                <h1>Color Boxes</h1>
                {this.state.boxes.map((b, i) => {
                    return <Box color={b} key={i} id={i} boxClick={this.handleBoxClick}/>;
                })}
            </div>
        );
    }
}

export default ColorBoxes;
