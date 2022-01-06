import styled, { css } from 'styled-components';

interface Props {
  inputError?: boolean;
}

export const Container = styled.div<Props>`
  margin-bottom: 2px;

  div {
    display: flex;
    flex-direction: column;
    position: relative;

    label {
      left: 0;
      margin-right: 5px;
    }

    input,
    select {
      text-transform: uppercase;
      flex: 1;
      padding: 5px 10px;
      background: transparent;
      border: 1px solid rgba(250, 175, 24, 1);
      color: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      outline: none;
      font-size: 1.4rem;

      ${({ inputError }) =>
        inputError &&
        css`
          color: #e65d25;
          border-color: #e65d25;
        `}
    }
  }

  .error-message {
    display: block;
    color: #e65d25;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
