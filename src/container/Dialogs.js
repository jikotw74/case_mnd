import React, { Component } from 'react';
import './Dialogs.css';
import Dialog from 'material-ui/Dialog';
import { closeDialog } from '../actions'
import { connect } from 'react-redux';

class Dialogs extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     selected: 4
    //     // };
    // }

    handleClick = (event) => this.props.dispatch(closeDialog());

    render() {        
        const closeIcon = <div className="close-dialog-btn" onClick={this.handleClick}/>;
        return (
            <div className="Dialogs">
                <Dialog
                    className="Dialogs-dialog"
                    modal={true}
                    open={this.props.dialog.open}
                >
                    {closeIcon}
                    {this.props.dialog.children}
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dialog: state.dialog
});
Dialogs = connect(mapStateToProps)(Dialogs);
export default Dialogs;
