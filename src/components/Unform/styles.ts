import styled from 'styled-components';
import { Form as UnformForm } from '@unform/web'

export const Form = styled(UnformForm)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 16px;
  width: 100%;

  >button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 80%;

    background: #ff79c6;
    border-radius: 2px;

    font-weight: lighter;
    letter-spacing: 6px;
  }
`;
