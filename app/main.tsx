import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AppDispatch, RootState } from './store';

export default function main() {
  const colorScheme = useColorScheme();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    console.log('Current User:', currentUser);
    
    // Aspetta che il router sia pronto
    const timeout = setTimeout(() => {
      
      if (!currentUser) {
        console.log('No user, redirecting to login');
        router.replace('/login');
      } else if (currentUser) {
        
        router.replace('/(tabs)');
      }
    }, 0);
    
    return () => clearTimeout(timeout);
  }, [currentUser]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName='login'>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
  )
}
