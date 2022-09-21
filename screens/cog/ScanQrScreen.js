import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const ScanQrScreen = () => {
    return (
        <View className="flex-1 text-white mx-8 mt-8">
            <View className="w-full flex-row justify-between">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl">Scan QR</Text>
            </View>
            <ScrollView className="w-full flex-1 mt-8">
                {
                    [1,2,3,4,5,6,7].map((item,index) => (
                        <TouchableOpacity onPress={() => navigation.navigate("EventDetails")}key={index} className="w-full bg-[#C3BEF780] rounded mb-4 p-4">
                            <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl">Workshop 1</Text>
                            <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-md mt-2">Besant Nagar</Text>
                            <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-md mt-2">August 28th 6:00AM</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default ScanQrScreen