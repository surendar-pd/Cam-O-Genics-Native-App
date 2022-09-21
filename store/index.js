/**
 * Application Store
 */

// Dependencies
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';

const store = configureStore({
    reducers: {
        user: userReducer,
    }
});

export default store;