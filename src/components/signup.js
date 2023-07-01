import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup'

export const Signup = () => {

  const validate = Yup.object({
    nombre: Yup.string()
      .min(5,'Debe tener al menos 5 caracteres')
      .max(35, 'Debe tener 35 caracteres o menos')
      .required('El nombre es requerido'),
    email: Yup.string()
      .email('email incorrecto')
      .required('email es requerido'),
    fono: Yup.string()
      .max(15,'Solo puedes ingresar 15 números como máximo')
      .test('solo-numeros', 'El campo solo debe contener números', value => !isNaN(value))
      .required('Teléfono requerido'),
    /*areaTexto: Yup.string()
      .required('Tienes que dejar un comentario')*/
    
  })

  return (
    <Formik
      initialValues={{
        nombre:'',
        email:'',
        fono: '',
        comment: ''
      }} 
      validationSchema={validate}
      onSubmit={values => 
        console.log(values)
      }
    >
        {formik => (
          <div>
            <h1 className='formTitle my-4'>SignUp </h1>
            
            <Form> 
              <TextField label='Nombre' name='nombre' type='text'/>
              <TextField label='Email' name='email' type='email'/>
              <TextField label='Telefono' name='fono' type='text'/>
              <label>Comentario</label>
              <textarea name='areaTexto' className=' form-control shadow-none'autoComplete='off'></textarea>
              <div className='d-flex justify-content-evenly g-3 align-items-start pt-5'>
                <button className='btn btn-success mt-3' type='submit'>Registro</button>
                
              </div>
              
            </Form>
          </div>

        )} 
    </Formik>
  )
}

