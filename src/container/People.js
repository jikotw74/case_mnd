import React, { Component } from 'react';
import './People.css';
import Person from '../components/Person';
import data from '../data/people';
import { connect } from 'react-redux'
import { openDialog } from '../actions'

class People extends Component {
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
            return <Person key={index} text={text} y={item.y} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="People">
                {list}
            </div>
        );
    }
}

People = connect()(People);
export default People;
