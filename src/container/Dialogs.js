import React, { Component } from 'react';
import './Dialogs.css';
import Dialog from 'material-ui/Dialog';
// import organization from '../data/organization';
import { connect } from 'react-redux';

class Dialogs extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     selected: 4
    //     // };
    // }

    render() {        
        console.log(this.props.dialog);
        return (
            <div className="Dialogs">
                <Dialog
                    modal={true}
                    open={this.props.dialog.open}
                >
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
