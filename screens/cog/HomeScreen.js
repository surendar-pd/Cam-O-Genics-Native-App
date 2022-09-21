import { View, Text } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
// import ProfileScreen from './ProfileScreen';
import SettingsScreen from '../SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import EventsScreen from './EventsScreen';
import EventDetailsScreen from './EventDetailsScreen';
import {ProfileScreenNavigator, EventsScreenNavigator, QrScreenNavigator, TasksScreenNavigator} from './CustomNavigation'


const Tabs = AnimatedTabBarNavigator();


const HomeScreen = () => {

    return (
        <SafeAreaView className="flex-1">
            <Tabs.Navigator
                tabBarOptions={{
                    activeTintColor: "#8A4FFF",
                    inactiveTintColor: "#222222",
                    activeBackgroundColor:"#C3BEF780",
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
                    component={ProfileScreenNavigator} />
                <Tabs.Screen 
                    name="Events"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons 
                                name="calendar-outline" 
                                size={20}
                                color={focused ? color : "#222222"}
                                focused={focused}
                                // color="black" 
                            />
                        )
                    }}
                    component={EventsScreenNavigator} />
                <Tabs.Screen 
                    name="Scan QR"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons 
                                name="qr-code-outline" 
                                size={20}
                                color={focused ? color : "#222222"}
                                focused={focused}
                                // color="black" 
                            />
                        )
                    }}
                    component={QrScreenNavigator} />
                <Tabs.Screen
                    name="Tasks"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons 
                                name="list-outline" 
                                size={20}
                                color={focused ? color : "#222222"}
                                focused={focused}
                                // color="black" 
                            />
                        )
                    }}
                    component={SettingsScreen} />
            </Tabs.Navigator>
            {/* <Stack.Navigator 
                screenOptions={{
                headerShown: false,
                gestureEnabled : true,
                gesturedirection: "horizontal",
                ...TransitionPresets.SlideFromRightIOS
            }}
            >
                <Stack.Screen name="EventDetails" component={EventDetailsScreen}/>
            </Stack.Navigator> */}
        </SafeAreaView>

    )
}

export default HomeScreen