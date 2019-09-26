import React, { Component } from 'react';
import { Router, Route,Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Sample from './components/Sample';
import DragDrop from './components/DragDrop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
   // this.showelement = this.showelement.bind(this);

  }
  render() {  
    const history = createBrowserHistory();
    return (
       <div className="App">
      <Router history={history}>
          <Switch>
          <Route exact path='/' component={DragDrop} />
            <Route exact path='/sample' component={Sample} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;