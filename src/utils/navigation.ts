import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
import { AnyObject } from '../types/general';

import {
  NavigationAction,
  NavigationContainerRef,
  NavigationState,
} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (scene: string, props?: AnyObject) =>
  navigationRef.current?.navigate(scene, props);

export const goBack = () => navigationRef.current?.goBack();

export const dispatchNavigationAction = (action: NavigationAction) =>
  navigationRef.current?.dispatch(action);

export const getActiveRouteName = (state?: NavigationState): string | null => {
  if (state !== undefined || navigationRef.current !== undefined) {
    const currentState = state ? state : navigationRef.current.getRootState();
    const route = currentState.routes[currentState.index];

    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route.state as NavigationState);
    }

    return route.name;
  }
  return null;
};


export const setStatusBar = (screenName: string, theme: DefaultTheme) => {
  const statusBar = getStatusBarStyle(screenName, theme);
  StatusBar.setBarStyle(statusBar.style as StatusBarStyle);
  if (!global.isIOS) {
    if (statusBar.bg) {
      StatusBar.setBackgroundColor(statusBar.bg);
    }
    StatusBar.setTranslucent(statusBar.translucent);
  }
};

const getStatusBarStyle = (screenName: string, theme: DefaultTheme) => {
  switch (screenName) {
    case 'success':
    case 'error':
    case 'checkout':
      return {
        style: 'light-content',
        bg: 'transparent',
        translucent: true,
      };
    default:
      return {
        style: 'dark-content',
        bg: 'transparent',
        translucent: true,
      };
  }
};
