import { ThemedText } from '@/components/themed-text'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function register() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText type="title">Register Screen</ThemedText>
        <Link href="/login" replace>
            <ThemedText type="link" style={{ marginTop: 20 }}>Go to Login</ThemedText>
        </Link>
    </SafeAreaView>
  )
}
