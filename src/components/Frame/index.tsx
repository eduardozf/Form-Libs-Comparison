import React from 'react';

import { Container, TitleContainer } from './styles';

interface IProps{
  title: string;
}

const Frame: React.FC<IProps> = ({children, title}) => {

  return (
    <Container>
      <TitleContainer>
        <h2>{title}</h2>
      </TitleContainer>
      {children}
    </Container>
  );
}

export default Frame;
