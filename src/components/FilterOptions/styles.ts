import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  select {
    margin-left: 5px;
    padding: 5px;
    outline: none;
  }

  @media (max-width: 500px) {
    width: 100%;
    background-color: black;

    select {
      flex: 1;
      margin: 0;
    }
  }
`;
