import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native'



const LottieScreen = () => {

    const animation = useRef(null);
    const navigation = useNavigation()


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
            <Text style={{fontFamily:'Montserrat_500Medium'}}>Password has been updated successfully</Text>
            <View className="w-full">
                <TouchableOpacity onPress={() => navigation.popToTop()} className="w-full flex items-center bg-[#C3BEF7] p-4 rounded">
                <Text style={{fontFamily: "Montserrat_500Medium"}} className="">Done</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LottieScreen