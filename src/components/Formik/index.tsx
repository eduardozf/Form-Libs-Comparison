import React from 'react';

import { Formik } from 'formik'
import Input from '../FormikInput'

import Frame from '../Frame'
import { Form } from './styles';

interface IFormData {
  firstName: string;
  lastName: string;
}

const FormikComponent: React.FC = () => {

  return (
    <Frame title="Formik" >
      <Formik
        initialValues={{firstName: '', lastName: ''}}
        onSubmit={(data: IFormData) => {
          alert(JSON.stringify(data));
        }}
      >
        <Form>
          <Input name="firstName" label="First Name"/>
          <Input name="lastName" label="Last Name"/>
          <button type="submit">SUBMIT</button>
        </Form>
      </Formik>
    </Frame>
    );
  }

  export default FormikComponent;
