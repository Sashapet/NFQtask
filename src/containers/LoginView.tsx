import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import { chooseErrorTitle } from '@utils/helpers/chooseErrorTitle';
import { COLORS } from '@assets/theme';
import { loginSchema } from '@utils/validation/validation';
import { scale } from '@utils/helpers/dimensions';
import { DefaultButton, Error } from '@components/.';
import { actions } from '@state/actions';
import { useDispatch } from 'react-redux';

export const LoginView: React.FC = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={async values => dispatch(actions.auth.login(values))}
      validationSchema={loginSchema}
      validateOnMount
    >
      {({ handleSubmit, values, handleChange, errors }) => {
        const submit = () => {
          setError(chooseErrorTitle(errors));
          Keyboard.dismiss();
          handleSubmit();
        };
        return (
          <LoginWrapper>
            <LogoWrapper>
              <Logo source={{ uri: 'https://placeimg.com/80/80/tech' }} />
            </LogoWrapper>
            <Form>
              <Input
                placeholder={'Username'}
                placeholderTextColor={COLORS.primary}
                value={values.username}
                onChangeText={handleChange('username')}
              />
              <Input
                placeholder={'Password'}
                secureTextEntry={true}
                placeholderTextColor={COLORS.primary}
                value={values.password}
                onChangeText={handleChange('password')}
              />
              <ButtonWrapper>
                <DefaultButton onPress={submit}>Submit</DefaultButton>
                <Error error={error} />
              </ButtonWrapper>
            </Form>
          </LoginWrapper>
        );
      }}
    </Formik>
  );
};
const LoginWrapper = styled.View`
  flex: 1;
  width: 80%;
  margin: 0 auto;
  align-items: center;
`;
const Form = styled.View`
  flex: 2;
  width: 100%;
`;
const LogoWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
const ButtonWrapper = styled.View``;
const Input = styled.TextInput`
  height: ${scale(50)}px;
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  /* text-align: center; */
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => scale(theme.spacing.s)}px;
`;
const Logo = styled.Image`
  width: ${scale(100)}px;
  height: ${scale(100)}px;
`;
