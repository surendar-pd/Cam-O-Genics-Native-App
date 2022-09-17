import { View, Text } from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from './ChatsScreen';
import SettingsScreen from './SettingsScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Tabs = AnimatedTabBarNavigator();


const HomeScreen = () => {

    return (
        // <NavigationContainer independent={true}>
        //     <SafeAreaView className="flex-1">
        //         <Tab.Navigator screenOptions={{headerShown: false}}>
        //             <Tab.Screen  name="Chat" component={ChatsScreen} />
        //             <Tab.Screen name="Settings" component={SettingsScreen} />
        //         </Tab.Navigator>
        //     </SafeAreaView>
        //     <StatusBar style="dark"/>
        // </NavigationContainer>
        <SafeAreaView className="flex-1">
            <Tabs.Navigator
                tabBarOptions={{
                    activeTintColor: "#8A4FFF",
                    inactiveTintColor: "#222222",
                    activeBackgroundColor:"#C3BEF7",
                    labelStyle:{
                        fontFamily:'Montserrat_500Medium'
                    }
                }}
                appearance={{
                    floating: false,
                    tabBarBackground: '#fff',
                    dotCornerRadius: 50,
                    dotSize: 'small',
                }}
                >
                <Tabs.Screen
                    name="Chat"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons 
                                name="chatbox-outline" 
                                size={20}
                                color={focused ? color : "#222222"}
                                focused={focused}
                                // color="black" 
                            />
                        )
                    }}
                    component={ChatsScreen} />
                <Tabs.Screen 
                    name="Search"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons 
                                name="search-outline" 
                                size={20}
                                color={focused ? color : "#222222"}
                                focused={focused}
                                // color="black" 
                            />
                        )
                    }}
                    component={ChatsScreen} />
                <Tabs.Screen 
                    name="Settings"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons 
                                name="settings-outline" 
                                size={20}
                                color={focused ? color : "#222222"}
                                focused={focused}
                                // color="black" 
                            />
                        )
                    }}
                    component={SettingsScreen} />
                <Tabs.Screen
                    name="Profile"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons 
                                name="person-outline" 
                                size={20}
                                color={focused ? color : "#222222"}
                                focused={focused}
                                // color="black" 
                            />
                        )
                    }}
                    component={SettingsScreen} />
            </Tabs.Navigator>
        </SafeAreaView>

    )
}

export default HomeScreen