import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { Link, useRouter, useSegments } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { setAppUser } from './slices/userSlice'
import { useAppDispatch } from './store'

interface LoginProps {
    username?: string;
    password?: string;
}

export default function login() {
    const segments = useSegments();
    const router = useRouter();
    const currentUser = useSelector((state: any) => state.user.currentUser);
    const dispatch = useAppDispatch();
    const colorScheme = useColorScheme();

    const Logo = {uri: 'https://wdagency.it/wp-content/uploads/2022/02/logo-a-colori-con-testo.png'}

    const [formLogin, setFormLogin] = useState<LoginProps | null>(null);

    const setCurrentUser = ()=>{
             dispatch(setAppUser(formLogin));
    }

    // useEffect(() => {
    //     console.log('Current segments:', segments);
    // }, [segments]);
    
    useEffect(() => {
        console.log('currentUser:', currentUser);
    }, [currentUser]);

    useEffect(() => {
        console.log('formLogin:', formLogin);
    }, [formLogin]);

    return (
        <SafeAreaView style={{ flex: 1 , padding: 0 , margin : 0}}>
            <ThemedView style={{ flex: 1, padding: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={Logo}
                    style={{ width: 300, height: 100, resizeMode: 'contain', marginBottom: 30 }}
                />
                <ThemedText type="title">Login</ThemedText>

                <View style={{ maxHeight: 100, flex: 1, flexDirection: 'column', gap: 20, justifyContent: 'center', marginTop: 20 }}>
                    <TextInput
                        placeholder="Username"
                        value={formLogin?.username || ''}
                        onChangeText={(text)=>setFormLogin(prev=>({...prev, username: text}))}
                        style={{ height: 'auto', borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, flex: 1 , borderRadius: 5, width: 300, color: colorScheme === 'dark' ? 'white' : 'black'}}
                    />
                    <TextInput
                        placeholder="Password"
                        keyboardType='visible-password'
                        onChangeText={(text)=>setFormLogin(prev=>({...prev, password: text}))}
                        value={formLogin?.password || ''}
                        style={{ height: 'auto', borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, flex: 1 , borderRadius: 5, color: colorScheme === 'dark' ? 'white' : 'black'}}
                    />
                </View>
                
                {/* Link a Register */}
                <View style={{ marginTop: 20 }}>
                    <Link href="/register" replace>
                        <ThemedText type="link">Sign Up</ThemedText>
                    </Link>
                </View>

                {/* Pulsanti */}
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', gap: 10, width: 300 }}>
                    <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, borderRadius: 5, alignItems: 'center', flex: 1 }} onPress={() => {
                        setFormLogin(_=>null);
                    }}>
                        <ThemedText style={{ color: 'white' }}>Reset</ThemedText>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{ backgroundColor: 'cyan', padding: 10, borderRadius: 5, alignItems: 'center', flex: 1 }} onPress={() => {
                        setCurrentUser();
                    }}>
                        <ThemedText style={{ color: 'black' }}>Login</ThemedText>
                    </TouchableOpacity>
                </View>

            </ThemedView>
        </SafeAreaView>
    )
}
