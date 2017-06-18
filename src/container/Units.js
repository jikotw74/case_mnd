import React, { Component } from 'react';
import './Units.css';
import Unit from '../components/Unit';
import data from '../data/units';
import { connect } from 'react-redux'
import { openDialog, openTaiwanLeft, openTaiwanRight } from '../actions'

class Units extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick = (index) => (event) => {
        this.setState({selected: index}, () => {
            let item = data[this.state.selected];
            let ele = <div>{item.name}</div>;
            this.props.dispatch(openDialog(ele));
            if(item.isLeft){
                this.props.dispatch(openTaiwanLeft());    
            }else{
                this.props.dispatch(openTaiwanRight());
            }
        });
    };

    render() {
        const list = data.map((item, index)=>{
            const text = item.name;
            const selected = this.state.selected === index;
            return <Unit key={index} text={text} x={item.x} y={item.y} selected={selected} click={this.handleClick(index)}/>;
        });

        let twClassName = 'Units__taiwan';
        twClassName += this.props.unit.open ? this.props.unit.isLeft ? ' is-open is-left' : ' is-open is-right' : '';
        return (
            <div className="Units">
                {list}
                <div className={twClassName}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    unit: state.unit
});

Units = connect(mapStateToProps)(Units);
export default Units;
