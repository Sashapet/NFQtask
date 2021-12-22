import React, { useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled, { ThemeProvider } from 'styled-components/native';
import { selectors } from '@state/.';
import { useSelector } from 'react-redux';
import { COLORS } from '@assets/theme';

import { LoginView, ProfileView } from '../containers';
import { MyTheme } from '../assets/theme/myTheme';
import { ROUTES } from './RouteNames';

const Navigator: React.FC = () => {
  const Stack = createStackNavigator();
  const isAuth = useSelector(selectors.auth.isAuth);
  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  if (isAuth === 'unchecked') {
    return <></>;
  }

  return (
    <ThemeProvider theme={MyTheme}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <TouchableWrapper>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                cardStyle: {
                  backgroundColor: COLORS.primary,
                },
              }}
            >
              {isAuth ? (
                <Stack.Screen name={ROUTES.Profile} component={ProfileView} />
              ) : (
                <Stack.Screen name={ROUTES.Login} component={LoginView} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </TouchableWrapper>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
};
const TouchableWrapper = styled.View`
  flex: 1;
`;
export default Navigator;
