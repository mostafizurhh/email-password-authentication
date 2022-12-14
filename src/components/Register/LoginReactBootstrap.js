import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const LoginReactBootstrap = () => {
    const [success, setSuccess] = useState(false); /* success state */
    const [loginError, setLoginError] = useState(false); /* login error state */
    const [userEmail, setUserEmail] = useState(''); /* reset password state */

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);
        setLoginError(false)

        /***************************  
        get user email and password 
        ****************************/
        const email = event.target.email.value
        const password = event.target.password.value

        /***************************  
         set function to signin 
         ****************************/
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                event.target.reset();
            })
            .catch(error => {
                console.error('error: ', error)
                setLoginError(true)
            })
    }

    /*******************************************************  
     get user email to check and send link to reset password 
     *******************************************************/
    const handleEmailBlur = (event) => {
        const email = event.target.value
        setUserEmail(email)
        console.log(email)
    }

    /*******************************
     create forgot password function 
     *******************************/
    const handleForgotPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset link has been sent. Please check your email inbox or spam.')
            })
            .catch(error => {
                console.error('error:', error)
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Please login!!!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail" onBlur={handleEmailBlur}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                {/*************************** 
                  show success message 
                  ***************************/}

                <h6>{success && <p className='text-success'><small>Login Successful</small></p>}</h6>

                {/*************************** 
                  show error message 
                  ***************************/}

                <h6>{loginError && <p className='text-danger'><small>Email or password doesn't match. Please try again!!</small></p>}</h6>


                <Button variant="primary" type="submit">
                    Login
                </Button>

                {/*************************** 
                  create forgot password link 
                  ***************************/}
                <button onClick={handleForgotPassword} type='button'><Link className='ms-3'>Forgot Password?</Link></button>
            </Form>

            {/********************* 
             page toggling message 
             **********************/}
            <p className='mt-3'><small>New to our website? Please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginReactBootstrap;