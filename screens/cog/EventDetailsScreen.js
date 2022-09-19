import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
// import QRCode from 'react-native-qrcode-svg';
import QRCode from 'react-native-qrcode-image';


const EventDetailsScreen = () => {

    const navigation = useNavigation()

    return (
        <View className="flex-1 text-white mx-8 mt-8">
            <View className="w-full flex-row items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="chevron-back-outline" 
                        size={24}
                    />
                </TouchableOpacity>
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl ml-2">Event Details</Text>
            </View>
            <View className="w-full flex-1 mt-8">
                <View className="w-full bg-[#C3BEF780] rounded p-4">
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl">Workshop 1</Text>
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-md mt-2">Besant Nagar</Text>
                    <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-md mt-2">August 28th 6:00AM</Text>
                </View>
                <View className="w-full flex items-center py-8">
                    <QRCode
                        value={"kohuh"}
                        size={320}
                        bgColor='#FFFFFA'
                        fgColor='#000000'/>
                </View>
                <TouchableOpacity className={`w-full flex items-center bg-[#8A4FFF] p-4 rounded`}>
                    <Text style={{fontFamily: "Montserrat_500Medium"}} className="text-white">Attendees 10</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EventDetailsScreen