import React from "react";

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import ProfileScreen from "./ProfileScreen";
import EventDetailsScreen from "./EventDetailsScreen";
import EventsScreen from "./EventsScreen";
import SettingsScreen from "../SettingsScreen";
import ScanQrScreen from "./ScanQrScreen";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const ProfileScreenNavigator = () => {
return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled : true,
        gesturedirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
    }} >
    <Stack.Screen
        name="Profile"
        component={ProfileScreen}
    />
    </Stack.Navigator>
);
}

export {ProfileScreenNavigator}; // Stack-Navigator for Screen 1 Tab

const EventsScreenNavigator = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled : true,
        gesturedirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
    }}>
        <Stack.Screen
            name="Event"
            component={EventsScreen}
        />
        <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        />
    </Stack.Navigator>
    );
}

export {EventsScreenNavigator}; // Stack-Navigator for Screen 2 Tab

const QrScreenNavigator = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled : true,
        gesturedirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
    }}>
        <Stack.Screen
            name="Qr"
            component={ScanQrScreen}
        />
    </Stack.Navigator>
    );
}

export {QrScreenNavigator};  // Stack-Navigator for Screen 3 Tab

const TasksScreenNavigator = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled : true,
        gesturedirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
    }}>
        <Stack.Screen
            name="Tasks"
            component={SettingsScreen}
        />
    </Stack.Navigator>
    );
}

export {TasksScreenNavigator};  // Stack-Navigator for Screen 3 Tab