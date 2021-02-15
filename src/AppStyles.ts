import styled from 'styled-components';

export const Container = styled.div`
  background: #282a36;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content:center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-left: 50px;
    > span{
      padding: 10px 0;
    }
  }
`;
