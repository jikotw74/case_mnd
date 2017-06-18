import React, { Component } from 'react';
import './Dialogs.css';
// import Dialog from 'material-ui/Dialog';
import Dialog from '../components/Dialog';
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
        const blackClassName = "Dialogs_black-screen" + (this.props.dialog.open ? " is-open" : "");
        return (
            <div className="Dialogs">
                <Dialog
                    className="Dialogs-dialog"
                    open={this.props.dialog.open}
                    onClose={this.handleClose}
                >
                    {this.props.dialog.children}
                </Dialog>
                <div className={blackClassName}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dialog: state.dialog
});
Dialogs = connect(mapStateToProps)(Dialogs);
export default Dialogs;
