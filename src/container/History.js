import React, { Component } from 'react';
import './History.css';
import VideoThumb from '../components/VideoThumb';
import data from '../data/history';
import { connect } from 'react-redux'
import { updateBodyChildren } from '../actions'

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick = (index) => (event) => {
        this.setState({selected: index});
    };

    changeBodyChildren = () => {
        if(this.props.dispatch){
            let item = data[this.state.selected];
            const text = item.content;
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
            const text = item.name;
            const selected = this.state.selected === index;
            return <VideoThumb key={index} text={text} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="History">
                {list}
            </div>
        );
    }
}

History = connect()(History);
export default History;
