import React, { Component } from 'react';
import './Dialogs.css';
// import Dialog from 'material-ui/Dialog';
// import Dialog from '../components/Dialog';
import { closeDialog, moveTaiwanOrigin } from '../actions'
import { connect } from 'react-redux';

class Dialogs extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     selected: 4
    //     // };
    // }

    handleClose = (event) => {        
        this.props.dispatch(moveTaiwanOrigin());
        this.props.dispatch(closeDialog());
    }

    render() {        
        let dialogClassName = "Dialogs" + (this.props.unit.open ? this.props.unit.isLeft ? " has-left-tw" : " has-right-tw" : "");
        dialogClassName += (this.props.dialog.open ? " is-open" : "");

        let children = [];
        if(this.props.dialog.open){
            const closeBtn = <div key="1" className="Dialogs-close-btn" onClick={this.handleClose}/>;
            const content = <div key="2" className="Dialogs-content">
                                {this.props.dialog.children}
                            </div>;
            const black = <div key="3" className="Dialogs_black-screen"/>;
            children.push(closeBtn);
            children.push(content);
            children.push(black);
        }

        if(this.props.unit.open || this.props.app.selected === 3){
            children.push(<div key="4" className='Dialogs-taiwan'/>);
        }

        return (
            <div className={dialogClassName}>
                {children}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    app: state.app,
    dialog: state.dialog,
    unit: state.unit
});
Dialogs = connect(mapStateToProps)(Dialogs);
export default Dialogs;
