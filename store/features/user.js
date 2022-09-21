/**
 * User Slice
 */

// Dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
});

// Exporting Actions.
export const { } = userSlice.actions;

// Exporting Reducer
export default userSlice.reducer;
