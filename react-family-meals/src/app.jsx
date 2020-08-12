import React, { Component } from 'react';
import './app.css';
import Footer from '@components/Footer';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app">
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;
