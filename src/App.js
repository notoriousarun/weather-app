import React from 'react';
import CardList from './CardList';
import {cardList} from './static-data';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
              <main className="App-content">
                <CardList cardList={cardList}/>
              </main>
            </div>
        );
    }
}

export default App;
