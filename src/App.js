import React from 'react';
import moment from 'moment';
import CardList from './CardList';
import HourlyList from './HourlyList';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
    state = {
        data: []
    };

    handleWeekDay = (date) => {
        const data = moment(date);
        const dow = data.day();
        const week = {0: "Sunday",
                      1: "Monday",
                      2: "Tuesday",
                      3: "Wenesday",
                      4: "Thrusday",
                      5: "Friday",
                      6: "Saturday",
                      7: "Sunday" };
    
        return (
            [
                date,
                week[dow]
            ]
            
        );
    }
    
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
            <Router>
              <div className="App">
                <main className="App-content">
                  <Route path="/"
                         render={(props) =>
                                 <CardList {...props}
                                           dataObject={dateArrayMap}
                                           handleWeekDay={this.handleWeekDay} />} />           

                  
                  {[...dateArrayMap.keys()].map(date =>
                       <Route path={`/${(this.handleWeekDay(date))[1]}`}
                              render={(props) =>
                                      <HourlyList {...props}
                                                  date={date}
                                                  dataMap={dateArrayMap}/>} />
                  )}

                </main>
              </div>
            </Router>
        );
    }
}

export default App;
