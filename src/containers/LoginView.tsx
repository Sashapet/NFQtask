import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { chooseErrorTitle, errorProps } from '@utils/helpers/chooseErrorTitle';
import { COLORS } from '@assets/theme';
import { loginSchema } from '@utils/validation/validation';
import { scale } from '@utils/helpers/dimensions';
import { DefaultButton, Error } from '@components/.';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '@state/.';

export const LoginView: React.FC = () => {
  const [error, setError] = useState<errorProps>({ type: null, text: null });
  const apiError = useSelector(selectors.auth.apiError);
  const dispatch = useDispatch();
  useEffect(() => {
    if (apiError) {
      setError({ type: 'apiError', text: apiError });
    }
  }, [apiError]);
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
              <Error
                error={error.type === 'apiError' ? error.text : ''}
                apiError={true}
                bottom={false}
              />
              <KeyboardAwareScrollView
                extraScrollHeight={30}
                enableOnAndroid={true}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ paddingTop: scale(25) }}
              >
                <InputWrapper>
                  <Error error={error.type === 'username' ? error.text : ''} />
                  <Input
                    placeholder={'Username'}
                    placeholderTextColor={COLORS.white}
                    value={values.username}
                    onChangeText={handleChange('username')}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Error error={error.type === 'password' ? error.text : ''} />
                  <Input
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor={COLORS.white}
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                </InputWrapper>

                <DefaultButton onPress={submit}>Submit</DefaultButton>
              </KeyboardAwareScrollView>
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
const InputWrapper = styled.View`
  padding-bottom: ${({ theme }) => scale(theme.spacing.s)}px;
`;
const LogoWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Input = styled.TextInput`
  border-bottom-color: ${({ theme }) => theme.colors.white};
  border-bottom-width: 2px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  padding-vertical: ${scale(5)}px;
`;
const Logo = styled.Image`
  width: ${scale(100)}px;
  height: ${scale(100)}px;
`;
