import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavItem from './components/NavItem';
import People from './components/People';
import Footer from './components/Footer';
import Dialogs from './container/Dialogs';
import data from './data/data';
import { connect } from 'react-redux'
import { updateBodyChildren } from './actions'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            selected: false,
        };
    }

    selectNav = (index) => (event) => {
        this.setState({
            home:false,
            selected: index
        });

        switch(index){
            case 2:
                this.props.dispatch(updateBodyChildren(<People />));
                break;
            default: 
                this.props.dispatch(updateBodyChildren([]));
        }
    };

    render() {
        let content;
        let navList = data.map((obj, index) => <NavItem key={index} text={obj.name} selected={this.state.selected === index} click={this.selectNav(index)}/>);
        if(this.state.home){
            content = <div className="App-home">
                <div className="App-home-nav">
                    {navList}
                </div>
            </div>
        }else{
            content = <div className="App-wrapper">
                <div className="App-wrapper-header" />
                <div className="App-wrapper-content">
                    <div className="App-wrapper-nav">
                        {navList}
                    </div>
                    <div className="App-wrapper-body">
                        {this.props.body.children}
                    </div>
                </div>
                <Footer selected={this.state.selected}/>
            </div>
        }
        return (
            <div className="App">
                {content}
                <Dialogs />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    body: state.body,
});
App = connect(mapStateToProps)(App);
export default App;
