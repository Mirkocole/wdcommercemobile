import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Provider, useSelector, useDispatch } from 'react-redux'

import { useColorScheme } from '@/hooks/use-color-scheme';
import React, { useEffect, useState } from 'react';
import  store from './store';
import type { RootState, AppDispatch } from './store';
import { getInitUser } from './slices/userSlice';
import Main from './main';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

