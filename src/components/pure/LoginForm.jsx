import React from 'react';
import PropTypes from 'prop-types';

import {Formik, Field, Form,ErrorMessage} from 'formik';
import * as Yup from 'yup';



const loginSchema = Yup.object().shape (  //Shape sirve para mostrar la estrcutura y Yup para validaciones
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')

    }
)


const LoginForm = ({loged,fetching,onLogin}) => {
    const initialCredentials = {
        email:'',
        password: ''
    }
    return (
        <Formik
                
                initialValues={initialCredentials}
                
                validationSchema={loginSchema}
                
                onSubmit={async (values) => {
                    onLogin(values.email,values.password)
                    }}
            >

                {/* WE OBTAIN PROPS FROM FORMIK */}

                {({  values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" type= "email" placeholder="example@email.com" />
                                
                                {/*Email errors */}
                                {
                                    errors.email && touched.email && 
                                    (
                                        <div>
                                                <ErrorMessage name = "email"/>
                                        </div>
                                        
                                    )
                                }
        
                                <label htmlFor="password">Password</label>
                                <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                                />
        
                                {/*Passwords errors */}
        
                                {
                                    errors.password && touched.password && 
                                    (
                                        <div>
                                                <ErrorMessage name = "password"/>
                                        </div>
                                        
                                    )
                                }
                                <button type="submit" >Login</button>
                                {fetching ? (<p>LOADING...</p>) : null}
                                {isSubmitting ? (<p>Login your credentials...</p>): null}
                        </Form>
                )}


                
        </Formik>
    );
};

LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin:PropTypes.func.isRequired

};

export default LoginForm;