import styled, { css } from 'styled-components';

interface ISideBar {
  registering: boolean;
}

export const Container = styled.div<ISideBar>`
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  max-width: 0;
  transition: max-width 0.2s ease-in-out;

  ${({ registering }) =>
    registering &&
    css`
      max-width: 100%;
    `}
`;
