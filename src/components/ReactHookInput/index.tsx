import React from 'react';

import { Container, Label } from './styles';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  register(): void;
  label?: string;
}


const UnformInput: React.FC<InputProps> = ({name, label, register, ...rest}) => {
  return (
    <>
    {label && <Label>{label}</Label>}
    <Container>
      <input name={name} type="text" ref={register} {...rest}/>
    </Container>
    </>
  );
}

export default UnformInput;