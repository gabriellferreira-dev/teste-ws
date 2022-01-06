import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  height: 100%;
  background: #f8f8f7;
  position: relative;
  transition: background-color 0.2s ease;
  justify-content: space-evenly;

  &:hover {
    background-color: #f2bc0585;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }

  .card-title {
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .car-color {
    font-size: 1.5rem;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-weight: 300;
      text-transform: uppercase;
    }

    .separator {
      background-color: #f2bc05;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      margin: 0 5px;
    }
  }
`;
