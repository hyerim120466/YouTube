import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import channel from './modules/channelSlice';
import header from './modules/headerSlice';
import viewingRecord from './modules/viewingRecordSlice';

export const store = configureStore({
    reducer: { auth, channel, header, viewingRecord },
});
