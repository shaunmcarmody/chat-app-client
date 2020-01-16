import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`

`;

const Input = styled.input`

`;

const Button = styled.button`

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
        <Input onChange={this.handleChange} value={this.state.value} />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}