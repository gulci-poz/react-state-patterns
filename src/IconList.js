import React, {Component} from 'react';

class IconList extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    };

    constructor(props) {
        super(props);
        this.state = {icons: ["bone", "cloud"]};
        this.addIcon = this.addIcon.bind(this);
    }

    addIcon() {
        const idx = Math.floor(Math.random() * this.props.options.length);
        const newIcon = this.props.options[idx];

        // mutating state

        // bad way, mutating existing data structure
        // let icons = this.state.icons;
        // icons.push(newIcon);
        // this.setState({icons: icons});

        // right way, working on a copy (snapshot) of existing data structure (immutable state)
        // required for Redux
        this.setState({icons: [...this.state.icons, newIcon]});
    }

    render() {
        const icons = this.state.icons.map((v, i) => <i className={`fas fa-${v}`} key={`${i}_${v}`}/>);
        return (
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        )
    }
}

export default IconList;
