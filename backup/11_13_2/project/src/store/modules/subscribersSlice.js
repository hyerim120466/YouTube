import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSubscribers: false,
    thisChannel: null,
};

export const subscribersSlice = createSlice({
    name: 'subscribersSlice',
    initialState,
    reducers: {
        isSubscribersTrue(state, action) {
            state.isSubscribers = true;
            state.thisChannel = action.payload;
        },
        isSubscribersFalse(state) {
            state.isSubscribers = false;
            state.thisChannel = null;
        },
    },
});

export const { isSubscribersTrue, isSubscribersFalse } = subscribersSlice.actions;
export default subscribersSlice.reducer;
