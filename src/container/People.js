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
        const item = data[index];
        const image = <Person key="1" index={index} text={item.name}/>
        const description = <div key="2" className="Person-description">{item.description}</div>;
        const children = [image, description];
        let ele = <div className="Person-detail">{children}</div>;
        this.props.dispatch(openDialog(ele));
    };

    render() {
        const list = data.map((item, index)=>{
            return <Person key={index} index={index} text={item.name} click={this.handleClick(index)}/>;
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
