import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const RegisterReactBootstrap = () => {
    /********************************************************
     set state for passwordError and successful user creation
     ********************************************************/
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    /*******************************
     create form's onSubmit function
     *******************************/
    const handleRegister = (event) => {
        event.preventDefault(); /* prevent page reload */
        setSuccess(false); /* prevent showing success msg by default */

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        /***************************
         set conditions for password
         ***************************/
        if (!/(?=.*[a-z])/.test(password)) {
            setPasswordError('Please provide at least 1 lowercase letter')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least 1 uppercase letter')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setPasswordError('Please provide at least 1 number')
            return
        }
        if (!/(?=.*[!@#$&*%])/.test(password)) {
            setPasswordError('Please provide at least 1 special charecter')
            return
        }
        if (!/.{8}/.test(password)) {
            setPasswordError('Password length must be at least 8 charecters')
            return
        }
        setPasswordError('');
        /***************************************
         create new user with email and password
         ***************************************/
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess(true); /* show success message */
                event.target.reset(); /* reset input fields */
            })
            .catch(error => {
                console.error('error: ', error)
                setPasswordError('email already used')
            })
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            {/* for simple form validation use 'required' at the last of the input field */}
            <h3>Please Register!!!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                {/* show passwordError */}
                <p className='text-danger'>{passwordError}</p>

                {/* show success message */}
                {success && <p className='text-success'>Registration Complete</p>}

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3'><small>Already have an accout? Please <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default RegisterReactBootstrap;