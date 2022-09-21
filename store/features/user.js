/**
 * User Slice
 */

// Dependencies
import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    user: {
        fullName: null,
        officialEmail: null,
        cogcId: null,
        avatar: null,
        defaultAvatar: null,
        settings: {
            email: {}
        }
    },
};

const getUserFromLocalStorage = async () => {
    let user = await AsyncStorage.getItem('cogcUser');
    user = user ? JSON.parse(user) : initialState.user;
    initialState.user = user;
    return Promise.resolve('User state set successfully!');
};

getUserFromLocalStorage()
    .then((res) => {
        console.log(res);
    })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            // Action Payload - User Object from backend response
            state.user = { ...action.payload };
            AsyncStorage.setItem('cogcUser', JSON.stringify(state.user), () => {
                console.log('User Logged in!');
            });
        },
        logoutUser: (state, action) => {
            state.user = initialState.user;
            AsyncStorage.removeItem('cogcUser', () => {
                console.log('User Logged out!');
            });
        },
    }
});

// Exporting Actions.
export const { loginUser, logoutUser } = userSlice.actions;

// Exporting Reducer
export default userSlice.reducer;
