import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { selectors } from '@state/selectors';
import { useSelector } from 'react-redux';

import { LoginView, ProfileView } from '../containers';
import { MyTheme } from '../assets/theme/myTheme';
import { ROUTES } from './RouteNames';

const Navigator: React.FC = () => {
  const Stack = createStackNavigator();
  const user = useSelector(selectors.auth.user);
  return (
    <ThemeProvider theme={MyTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name={ROUTES.Profile} component={ProfileView} />
          ) : (
            <Stack.Screen name={ROUTES.Login} component={LoginView} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Navigator;
