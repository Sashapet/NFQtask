import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';

import { DemoView } from '../containers/DemoFlow';
import { MyTheme } from '../assets/theme/myTheme';
import { ROUTES } from './RouteNames';

const Navigator: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={MyTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ROUTES.Demo} component={DemoView} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Navigator;
