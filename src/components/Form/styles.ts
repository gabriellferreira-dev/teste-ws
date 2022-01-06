import { Form } from 'formik';
import styled from 'styled-components';

export const Container = styled(Form)`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;

  button {
    margin: 5px 0;
  }
`;
