import React from 'react';

import { Wrapper, Container, Form } from './LoginPage.styled';
import FormInput from '../../components/FormInput/Form-Input.component';
import Button from '../../components/Button/Button.component';


class LoginPage extends React.Component {

    render() {
        return (
            <Wrapper>
                <Container>
                    <h1>Login Form</h1>
                    <Form>
                        <FormInput
                            name='email'
                            required
                            label='Email'
                            type='email'
                        />
                        <FormInput 
                            name='password'
                            label='Password'
                            type='password'
                        />
                        <div>
                            <Button type='submit' typeBtn='highlight'>Login</Button>
                            <span>Register now ?</span>
                        </div>
                    </Form>
                </Container>
            </Wrapper>
        )
    }
}

export default LoginPage