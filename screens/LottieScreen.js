import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import React, { useRef, useEffect, useCallback } from 'react';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation, useFocusEffect} from '@react-navigation/native'



const LottieScreen = ({route}) => {

    const animation = useRef(null);
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
            return true;
            };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),
    );

    return (
        <SafeAreaView className="flex-1 items-center justify-center gap-4 p-8">
            <LottieView
                autoPlay
                loop={false}
                ref={animation}
                style={{
                width: 400,
                height: 400,
                }}
                source={require('../assets/lotties/success.json')}
            />
            <Text style={{fontFamily:'Montserrat_500Medium'}}>{route.params?.msg}</Text>
            <View className="w-full">
                <TouchableOpacity onPress={() => navigation.navigate(route.params.nav)} className="w-full flex items-center bg-[#C3BEF7] p-4 rounded">
                <Text style={{fontFamily: "Montserrat_500Medium"}} className="">Done</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LottieScreen