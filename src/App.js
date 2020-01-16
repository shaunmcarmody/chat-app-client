import React, { Component } from 'react';
import axios from 'axios';
import { Portal, Splash } from './components/views';

class App extends Component {
  state = {
    user: null,
    messages: [],
    error: ''
  }

  initUser = (user) => {
    this.setState({ user });
    this.subscribe();
  }

  postMessage = async (message) => {
    try {
      const { user } = this.state
      await axios.post('/message/new', { user, message })
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  subscribe = async () => {
    try {
      const totalMsgs = this.state.messages.length;
      const { messages } = await axios.post('/subscribe', { totalMsgs });
      this.setState({ messages });
    } catch ({ message }) {
      this.setState({ error: message });
    }
    setTimeout(() => this.subscribe(), 1000);
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.user ?
            <Portal
              messages={this.state.messages}
              submit={this.postMessage}
            />
            :
            <Splash
              submit={this.initUser}
            />
        }
      </div>
    );
  }
  
}

export default App;
