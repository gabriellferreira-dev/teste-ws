import styled, { css } from 'styled-components';

interface IStyleButton {
  icon?: boolean;
}

export const Container = styled.button<IStyleButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 7px 10px;
  background-color: #0066ff;
  border: none;
  border-radius: 5px;
  color: #fff;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3083ff;
  }

  ${({ icon }) =>
    icon &&
    css`
      justify-content: space-evenly;

      svg {
        font-size: 2rem;
        margin-right: 5px;
      }
    `}
`;
