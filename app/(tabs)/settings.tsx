import ParallaxScrollView from '@/components/parallax-scroll-view'
import { ThemedText } from '@/components/themed-text'
import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function Settings() {

    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');

    const onPress = () => {
        alert(`Text: ${text}, Number: ${number}`);
        // onChangeText('');
        // onChangeNumber('');
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ParallaxScrollView
                    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
                    headerImage={
                        <Image
                            source={require('@/assets/images/partial-react-logo.png')}
                            style={styles.reactLogo}
                        />
                    }>
                    <View style={{ padding: 0, gap: 10, flex: 1, margin: 0}}>
                        <ThemedText type='title'>Settings Screen</ThemedText>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            placeholder='ck'
                            value={text}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="secret ci"
                            keyboardType="numeric"
                        />
                        <View style={{ height: 'auto', flexDirection: 'row', justifyContent: 'space-between', padding: 0 }}>
                            <TouchableOpacity style={{...styles.button, backgroundColor: '#e64242ff'}} onPress={() => {
                                onChangeText('');
                                onChangeNumber('');
                            }}>
                                <Text style={{padding: 5, color: 'white', fontWeight: 'bold'}}>Reset</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{...styles.button, backgroundColor: '#42d8e6ff'}} onPress={onPress}>
                                <Text style={{padding: 5, color: 'white', fontWeight: 'bold'}}>Save Settings</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ParallaxScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 12,
        borderRadius: 5,
    },
})
