import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { Portal, Splash } from './components/views';

const Div = styled.div`
  margin: auto;
  max-width: 600px;
  width: 100%;
`;

class App extends Component {
  state = {
    user: null,
    userId: null,
    messages: [],
    error: '',
  }

  initUser = (user) => {
    const userId = uuid();
    this.setState({ user, userId });
    this.subscribe();
  }

  postMessage = async (message) => {
    try {
      const { user, userId } = this.state;
      await axios.post('http://localhost:5000/message/new', { user, userId, message });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  }

  subscribe = async () => {
    try {
      const totalMsgs = this.state.messages.length;
      const { data } = await axios.post('http://localhost:5000/subscribe', { totalMsgs });
      this.setState(({ messages }) => ({
        messages: [...messages, ...data.messages]
      }));
    } catch ({ message }) {
      this.setState({ error: message });
    }
    setTimeout(() => this.subscribe(), 1000);
  }
  
  render() {
    return (
      <Div>
        {
          this.state.user ?
            <Portal
              messages={this.state.messages}
              submit={this.postMessage}
              userId={this.state.userId}
            />
            :
            <Splash
              submit={this.initUser}
            />
        }
      </Div>
    );
  }
  
}

export default App;
