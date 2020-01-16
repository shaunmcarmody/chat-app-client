import React, { Component } from 'react';
import { Portal, Splash } from './components/views';

class App extends Component {
  state = {
    user: null,
    messages: [],
    error: ''
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.user ?
            <Portal
            />
            :
            <Splash
            />
        }
      </div>
    );
  }
  
}

export default App;
