import React, {useEffect, useRef} from 'react';
import { useField } from '@unform/core'

import { Container, Label } from './styles';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
}

const UnformInput: React.FC<InputProps> = ({name, label, ...rest}) => {
  const { fieldName, error, defaultValue, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  },[fieldName, registerField])

  return (
    <>
    {label && <Label>{label}</Label>}
    <Container>
      <input ref={inputRef} defaultValue={defaultValue} type="text" {...rest}/>
      {error && error}
    </Container>
    </>
  );
}

export default UnformInput;