import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>HER.O</Icon>
          <FormContent>
            <Form action='mailto:sadanalaakshaya7@gmail.com'  method='POST' enctype='text/plain'>
           
              <FormH1>Sign in to your member account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin;
