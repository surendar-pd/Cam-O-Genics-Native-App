import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ProfileScreen = () => {

    
    return (
        <View className="flex-1 text-white mx-8 mt-8">
            <View className="w-full flex-row justify-between">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl">Profile</Text>
                <View className="flex-row items-center gap-6">
                    <TouchableOpacity>
                        <Feather name="edit-2" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons 
                            name="notifications-outline" 
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full flex-1 bg-gray-700 mt-8">
                <View className="w-full flex-row items-center bg-slate-300  py-4">
                    <Image
                        className="w-24 h-24 rounded-full bg-black"
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/3006/3006876.png',
                        }}
                    />
                    <View className="mx-4">
                        <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl">Surendar PD</Text>
                        <Text style={{fontFamily:'Montserrat_500Medium'}}>Photographer</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen