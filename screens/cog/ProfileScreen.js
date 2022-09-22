import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {

    const {user} = useSelector(state => state.user)
    console.log(user?.avatar ?? user?.defaultAvatar)

    
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
            <View className="w-full flex-1 mt-8">
                <View className="w-full flex-row items-center py-4">
                    <Image
                        className="w-24 h-24 rounded-full bg-black"
                        source={{
                            uri: `${user?.avatar ?? user?.defaultAvatar}`
                        }}
                    />
                    <View className="mx-4">
                        <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl">{user?.fullName}</Text>
                        <Text style={{fontFamily:'Montserrat_500Medium'}}>{user?.communityIdentities && user?.communityIdentities.length > 0 ? user?.communityIdentities?.join(', ') : 'Select roll'}</Text>
                    </View>
                </View>
                <View className="w-full flex-1 bg-gray-700">

                </View>
            </View>
        </View>
    )
}

export default ProfileScreen