import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSideMenu: true,
};

export const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        SideMenuChange(state) {
            state.isSideMenu = !state.isSideMenu;
        },
    },
});

export const { SideMenuChange } = headerSlice.actions;
export default headerSlice.reducer;
