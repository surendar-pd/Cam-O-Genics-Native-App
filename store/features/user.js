/**
 * User Slice
 */

// Dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: null,
    officialEmail: null,
    cogcId: null,
    avatar: null,
    defaultAvatar: null,
    settings: {
        email: {}
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
        loginUser: (state, action) => { },
        logoutUser: (state, action) => { },
    }
});

// Exporting Actions.
export const { } = userSlice.actions;

// Exporting Reducer
export default userSlice.reducer;
