import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import {cards} from './static-data';

class App extents React.Component {
    render() {
        return (
            <div className="App">
              <main className="App-content">
                <CardList cards={cards}/>
              </main>
            </div>
        );
    }
}

export default App;
