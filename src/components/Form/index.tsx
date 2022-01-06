import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { Car } from '../../interfaces/Car';
import fuels from '../../utils/fuels';
import makes from '../../utils/makes';
import Button from '../Button';
import { Field } from '../Field';
import { Container } from './styles';

type Props = {
  errors: FormikErrors<Car>;
  touched: FormikTouched<Car>;
};

export const Form: React.FC<Props> = ({ errors, touched }) => {
  return (
    <Container>
      <Field
        id="marca_nome"
        name="marca_nome"
        label="Marca"
        inputError={!!(errors.marca_nome && touched.marca_nome)}
        component="select"
        defaultText="Selecione a marca"
        options={makes}
      />
      <Field
        id="nome_modelo"
        name="nome_modelo"
        label="Modelo"
        inputError={!!errors.nome_modelo && touched.nome_modelo}
      />
      <Field
        id="ano"
        name="ano"
        label="Ano do veículo"
        type="number"
        min="2000"
        inputError={!!errors.ano && touched.ano}
      />
      <Field
        id="combustivel"
        name="combustivel"
        label="Combustível"
        inputError={!!errors.combustivel && touched.combustivel}
        component="select"
        defaultText="Selecione o combustível"
        options={fuels}
      />
      <Field
        id="num_portas"
        name="num_portas"
        label="Quantidade de portas"
        inputError={!!errors.num_portas && touched.num_portas}
        component="select"
        defaultText="Selecione quantas portas"
        options={[2, 4]}
      />
      <Field
        id="cor"
        name="cor"
        label="Cor"
        inputError={!!errors.cor && touched.cor}
      />
      <Field
        id="valor_fipe"
        name="valor_fipe"
        label="Valor Fipe"
        type="number"
        inputError={!!errors.valor_fipe && touched.valor_fipe}
      />
      <Button type="submit">Cadastrar</Button>
      <Button type="reset" outline warning>
        Cancelar
      </Button>
    </Container>
  );
};
