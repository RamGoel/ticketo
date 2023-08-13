import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import globalSlice from './slices/globalSlice';

export const store = configureStore({
    reducer: {
        global: globalSlice,
    },
});
