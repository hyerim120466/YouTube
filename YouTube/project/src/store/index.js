import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import channel from './modules/channelSlice';
import header from './modules/headerSlice';
import subscribers from './modules/subscribersSlice';
import savepop from './modules/savePopupSlice';

export const store = configureStore({
    reducer: { auth, channel, header, subscribers, savepop },
});
