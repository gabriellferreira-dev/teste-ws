import styled from 'styled-components';

export const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  .group-title {
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
`;
