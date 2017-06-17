import React, { Component } from 'react';
import './Organizations.css';
import Coin from './Coin';
import organization from '../data/organization';
import { connect } from 'react-redux'
import { updateBodyChildren } from '../actions'

class Organizations extends Component {
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
            let item = organization[this.state.selected];
            let ele = <div>{item.year}</div>;
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
        const list = organization.map((item, index)=>{
            const text = "民國" + item.year + "年";
            const selected = this.state.selected === index;
            return <Coin key={index} text={text} y={item.y} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="Organizations">
                {list}
            </div>
        );
    }
}

// Organizations = connect(select)(Organizations);

// const mapStateToProps = (state) => ({
//     body: state.body
// });

// const mapDispatchToProps = {
//     updateBodyChildren: updateBodyChildren
// };

Organizations = connect()(Organizations);
export default Organizations;
