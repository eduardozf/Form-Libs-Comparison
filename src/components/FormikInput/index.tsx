import React from 'react';

import { Container, Label, Input } from './styles';

interface InputProps{
  name: string;
  label?: string;
  placeholder?: string;
}

const UnformInput: React.FC<InputProps> = ({name, label, ...rest}) => {
  return (
    <>
    {label && <Label>{label}</Label>}
    <Container>
      <Input name={name} type="text" {...rest} />
    </Container>
    </>
  );
}

export default UnformInput;