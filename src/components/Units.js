import React, { Component } from 'react';
import './Units.css';
import Unit from './Unit';
import data from '../data/units';
import { connect } from 'react-redux'
import { openDialog } from '../actions'

class Units extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick = (index) => (event) => {
        this.setState({selected: index});

        let item = data[this.state.selected];
        let ele = <div>{item.name}</div>;
        this.props.dispatch(openDialog(ele));
    };

    render() {
        const list = data.map((item, index)=>{
            const text = item.name;
            const selected = this.state.selected === index;
            return <Unit key={index} text={text} x={item.x} y={item.y} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="Units">
                {list}
            </div>
        );
    }
}

Units = connect()(Units);
export default Units;
