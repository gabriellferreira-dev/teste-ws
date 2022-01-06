import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: #f8f8f7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 80px;
  }

  p {
    text-align: center;
    font-size: 1.8rem;
    margin: 0 10px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0;

    p,
    label {
      display: none;
    }
  }
`;
