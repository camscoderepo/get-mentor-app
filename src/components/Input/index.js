import React from 'react';
import { Container, Label, Input } from './input-styles';

const InputFloatLabel = (props) => {
  return (
    <Container>
      <Input />
      <Label>{props.placeholder}</Label>
    </Container>
  );
};

export default InputFloatLabel;

// name="username"
//           value={username}
//           onChange={this.onChange}
//           type="text"
//           placeholder="Name"
