import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';
import Snack from './Snack';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <VendingMachine />
                </Route>
                <Route exact path="/soda">
                    <Snack name="soda" />
                </Route>
                <Route exact path="/chips">
                    <Snack name="chips" />
                </Route>
                <Route exact path="/candy">
                    <Snack name="candy" />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
