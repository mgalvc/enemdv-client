import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Linguagens from './Linguagens'
import Humanas from './Humanas'
import Questions from './Questions'
import './App.css';

class App extends Component {
    constructor() {
        super();
        window.responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/linguagens" component={Linguagens} />
                    <Route path="/humanas" component={Humanas} />
                    <Route path="/questoes-linguagens" component={Questions} />
                    <Route path="/questoes-humanas" component={Questions} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
