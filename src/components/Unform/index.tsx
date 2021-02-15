import React from 'react';

import Input from '../UnformInput'
import { Form } from './styles';
import Frame from '../Frame'

const Unform: React.FC = () => {

  return (
    <Frame title="Unform">
      <Form onSubmit={(data) => alert(JSON.stringify(data))}>
        <Input name="firstName" label="First Name"/>
        <Input name="lastName" label="Last Name"/>
        <button type="submit">SUBMIT</button>
      </Form>
    </Frame>
  );
}

export default Unform;
