import React, { Component } from 'react';
import './Matters.css';
import Coin from './Coin';
import data from '../data/matter';
import { connect } from 'react-redux'
import { updateBodyChildren } from '../actions'

class Matters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 4
        };
    }

    handleClick = (index) => (event) => {
        this.setState({selected: index});
    };

    changeBodyChildren = () => {
        if(this.props.dispatch){
            let item = data[this.state.selected];
            const text = "民國" + item.year + "年";
            let ele = <div>{text}</div>;
            this.props.dispatch(updateBodyChildren(ele));
        }
    }

    componentDidMount(){
        this.changeBodyChildren();
    }

    componentDidUpdate(){
        this.changeBodyChildren();
    }

    render() {
        const list = data.map((item, index)=>{
            const text = "民國" + item.year + "年";
            const selected = this.state.selected === index;
            return <Coin key={index} text={text} y={item.y} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="Matters">
                {list}
            </div>
        );
    }
}

Matters = connect()(Matters);
export default Matters;
