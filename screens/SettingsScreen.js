import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/features/user';

const SettingsScreen = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <View>
            <Text>SettingsScreen</Text>
            <Text onPress={handleLogout}>Logout</Text>
        </View>
    )
}

export default SettingsScreen