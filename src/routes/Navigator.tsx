import React, { useContext, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { DefaultTheme, ThemeContext } from 'styled-components/native';

import {
  getActiveRouteName,
  navigationRef,
  setStatusBar,
} from '../utils/navigation';

import { DemoView } from '../containers/DemoFlow';
import { ROUTES } from './RouteNames';

const disabledAndroidBackScreens: string[] = [
  ROUTES.QuizEmail,
  ROUTES.Calculating,
  ROUTES.Summary,
  ROUTES.Checkout,
  ROUTES.Register,
  ROUTES.Success,
  ROUTES.Main,
];

let currentRouteName = 'unknown';
let previousRouteName = 'unknown';

export const getCurrentRouteName = () => currentRouteName;
export const getPreviousRouteName = () => previousRouteName;

const Navigator = () => {
  const { t } = useTranslation('tabLabels');
  const theme = useContext(ThemeContext);

  const onMount = () => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBack);
    return () => onUnmount();
  };

  const onUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', onAndroidBack);
  };

  useEffect(onMount, []);

  const onAndroidBack = () => {
    const scene = currentRouteName;
    const enableBack = disabledAndroidBackScreens.indexOf(scene) !== -1;
    return enableBack;
  };

  const onRouteChange = (state: NavigationState, theme: DefaultTheme) => {
    previousRouteName = currentRouteName;
    currentRouteName = getActiveRouteName(state) as string;

    if (currentRouteName !== previousRouteName) {
      maybeLeaveScreenBreadcrumb(currentRouteName);
      AnalyticsApi.maybeLogVisitedView(currentRouteName);
      setStatusBar(currentRouteName, theme);
    }
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state: NavigationState) => onRouteChange(state, theme)}
    >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="demoScreen" component={DemoView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
