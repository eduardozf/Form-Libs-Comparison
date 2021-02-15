import styled from 'styled-components'

export const Container = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease 0.2s;

  @media screen and (max-width: 1200px) {
    width: 250px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  letter-spacing: 2px;
  border-bottom: 2px solid #bd93f9;

  > h2 {
    font-weight: lighter;
    padding-bottom: 6px;
  }

`;
