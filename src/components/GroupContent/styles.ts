import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 250px;
  padding: 5px;
  overflow: none;
  overflow-x: scroll;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
