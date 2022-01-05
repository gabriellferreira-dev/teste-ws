import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  height: 100%;
  background: #f8f8f7;
  position: relative;

  &:not(:last-child) {
    margin-right: 5px;
  }

  img {
    background-color: black;
    width: 100%;
    height: calc(100% / 2);
  }

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% / 2);
    align-items: center;
    justify-content: space-evenly;

    .card-title {
      font-size: 1.8rem;
      font-weight: 500;
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
  }
`;
