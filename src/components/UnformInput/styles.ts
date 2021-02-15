import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 2px;
  width: 80%;

  > input {
    width: 100%;
    padding: 10px 20px;
    color: #44475a;
    border: 2px solid transparent;

    &:focus{
      border: 2px solid #bd93f9;
    }
  }
  margin-bottom: 15px;
`;

export const Label = styled.span`
font-size: 12px;
font-weight: bold;
text-transform: uppercase;
letter-spacing: -0.5px;

padding-bottom: 2px;

display: flex;
width: 80%;
`
