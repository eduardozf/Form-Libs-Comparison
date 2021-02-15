import React from 'react';

import { useForm } from 'react-hook-form';
import Input from '../ReactHookInput'

import Frame from '../Frame'
import { Form } from './styles';

const ReactForm: React.FC = () => {
  const {handleSubmit, register } = useForm();

  return (
    <Frame title="React Hook Form">
      <Form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <Input name="firstName" label="First Name" register={register} />
        <Input name="lastName" label="Last Name" register={register} />
        <button type="submit">SUBMIT</button>
      </Form>
    </Frame>
  );
}

export default ReactForm;
