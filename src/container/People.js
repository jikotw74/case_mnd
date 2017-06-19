import React, { Component } from 'react';
import './People.css';
import Person from '../components/Person';
import data from '../data/people';
import { connect } from 'react-redux'
import { openDialog } from '../actions'

class People extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    handleClick = (index) => (event) => {
        let item = data[index];
        let ele = <div>{item.name}</div>;
        this.props.dispatch(openDialog(ele));
    };

    render() {
        const list = data.map((item, index)=>{
            const text = item.name;
            return <Person key={index} text={text} y={item.y} click={this.handleClick(index)}/>;
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
