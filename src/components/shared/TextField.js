import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1875em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: MuiInputBase-keyframes-auto-fill-cancel;
  -webkit-tap-highlight-color: transparent;
`;

const Button = styled.button`
  padding: 3px 4px;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  color: #fff;
  background-color: #3f51b5;
`;

export default class TextField extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state
    this.props.submit(value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <Form>
        <Input onChange={this.handleChange} value={this.state.value} placeholder={this.props.placeholder} />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}