import React, { Component } from 'react';
import './People.css';
import Person from './Person';
import data from '../data/people';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick = (index) => (event) => {
        this.setState({selected: index});
    };

    render() {
        const list = data.map((item, index)=>{
            const text = item.name;
            const selected = this.state.selected === index;
            return <Person key={index} text={text} y={item.y} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="People">
                {list}
            </div>
        );
    }
}

export default People;
