import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSavePop: false,
    popMsg: null,
};

export const savepopSlice = createSlice({
    name: 'savepopSlice',
    initialState,
    reducers: {
        isSavePopTrue(state, action) {
            state.isSavePop = true;
            state.popMsg = action.payload;
        },
        isSavePopFalse(state) {
            state.isSavePop = false;
            state.popMsg = null;
        },
    },
});

export const { isSavePopTrue, isSavePopFalse } = savepopSlice.actions;
export default savepopSlice.reducer;
