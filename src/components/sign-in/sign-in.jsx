import React from "react";
import Layout from "../shared/layout";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import  { useState } from 'react';
import { Formik } from "formik";
import "../sign-up/sign-up.scss";


const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

const SignIn = () => {
  const initialValus = {
    password:'',
    email: ''
  }
  const navigate = useNavigate()
  const [error,setError] = useState() 


const handleSubmit = async (values, { setSubmitting }) => {
    console.log('values', values);
    const { email, password } = values;
    try {
      //signin with firebase
      await signInWithEmailAndPassword(auth, email, password);
      setSubmitting(false);
      navigate('/shop');
    } catch (error) {
      console.log('error', error);
      setSubmitting(false);
      if (error.code === 'auth/invalid-login-credentials') {
        setError('Invalid email or password');
      } else {
        setError(error.message);
      }
    }
  };
  


  return(
    <Layout>
        <h1>Sign In</h1>
        <div className="form-container">
            <Formik
                initialValues={initialValus}
                validate={validate}
                onSubmit={handleSubmit}>
                {
                ({  values,
                    errors, 
                    handleChange, 
                    handleSubmit, 
                    isSubmitting}) => {
                    const {email} = errors       
                    return(
                        <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email"
                            className={'nomad-input email ' + (email ? 'error' : '')}
                            />
                        </div>
                        <div>
                            <input 
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Password"
                            className = 'nomad-input '
                            />
                        </div>
                        <div className="submit-btn">
                            <button
                            type="submit"
                            disabled = { isSubmitting }
                            className="button is-black nomad-btn submit">
                                Sign In 
                            </button>
                        </div>
                        <div className='error-message'>
                            {
                            error && <p>{error.message}</p>
                            }
                         </div>   
                    </form>
                    )
                    }
                }
                </Formik>
            </div>
        </Layout>
       )
    }

    export default SignIn;