import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SettingsScreen = () => {

    const handleLogout = async () => {
        try {
            await AsyncStorage.setItem('user', "false")
        } catch(e) {
            console.log(e)
        }
        console.log('logged out.')
    }

    const getData = async () => {
        try {
        const token = await AsyncStorage.getItem('user')
        if(token !== null) {
            console.log(token)
        }
        } catch(e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        getData();
    },[])

    return (
        <View>
            <Text>SettingsScreen</Text>
            <Text onPress={handleLogout}>Logout</Text>
        </View>
    )
}

export default SettingsScreen