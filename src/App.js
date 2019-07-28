import React from 'react';
import CardList from './CardList';
import './App.css';

class App extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=1277333&APPID=e69c9716f6019064c973daa6348cbea9')
            .then(response => response.json())
            .then(json => this.setState({ data: json.list }));
    }
    
    render() {
        // {"key" => []}
        const dateArrayMap = new Map();
        const dataList = this.state.data;
        
        dataList.forEach(function(item){
            const date = item.dt_txt.slice(0, -9);
            if (!dateArrayMap.has(date)) {
                const elements = dataList.filter(function(obj){
                     return obj.dt_txt.slice(0, -9) === date;
                });
                dateArrayMap.set(date, elements);
            }
        });
        
        return (
            <div className="App">
              <main className="App-content">
                <CardList cardList={dateArrayMap}/>
              </main>
            </div>
        );
    }
}

export default App;
