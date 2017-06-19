import React, { Component } from 'react';
import './Units.css';
import Unit from '../components/Unit';
import data from '../data/units';
import { connect } from 'react-redux'
import { openDialog, openTaiwanLeft, openTaiwanRight } from '../actions'

class Units extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    handleClick = (index) => (event) => {
        let item = data[index];
        let ele = <div>{item.name}</div>;
        if(item.isLeft){
            this.props.dispatch(openTaiwanLeft());    
        }else{
            this.props.dispatch(openTaiwanRight());
        }
        this.props.dispatch(openDialog(ele));
    };

    render() {
        const list = data.map((item, index)=>{
            const text = item.name;
            return <Unit 
                key={index} 
                text={text} 
                x={item.x} 
                y={item.y} 
                isLeft={item.isLeft}
                click={this.handleClick(index)}
            />;
        });

        let className = "Units";
        if(this.props.unit.open){
            className += " is-open";
        }
        return (
            <div className={className}>
                {list}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    unit: state.unit
});

Units = connect(mapStateToProps)(Units);
export default Units;
