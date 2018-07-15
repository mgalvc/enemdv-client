import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './home/Home'

class App extends Component {
    constructor() {
        super();
        window.responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
    }
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact={true} component={Home} />
            </BrowserRouter>
        );
    }
}

export default App;
