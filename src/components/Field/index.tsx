import { ErrorMessage, Field as FormikField } from 'formik';
import React from 'react';
import { InputAttributes } from '../../interfaces/InputAttributes';
import { IMake } from '../FormRegisterCar';
import { Container } from './styles';

export const Field: React.FC<InputAttributes> = ({
  inputError,
  component,
  options,
  label,
  defaultText,
  ...attributes
}) => {
  return (
    <Container inputError={inputError}>
      <div>
        <label htmlFor={attributes.id}>{label}</label>
        {component === 'select' ? (
          <FormikField component={component || ''} {...attributes}>
            <option hidden>{defaultText}</option>
            {options?.map((value, index) => (
              <option
                key={index}
                value={((value as IMake).marca_nome || value) as string}
              >
                {(value as IMake).marca_nome || value}
              </option>
            ))}
          </FormikField>
        ) : (
          <FormikField component={component || ''} {...attributes} />
        )}
      </div>
      <ErrorMessage
        name={attributes.name as string}
        component="span"
        className="error-message"
      />
    </Container>
  );
};
