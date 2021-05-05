/** @format */

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    login: null,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuLogin: (state, action) => {
            state.login = action.payload;
        },
    },
});

export default menuSlice.reducer;
export const {setMenuLogin} = menuSlice.actions;
export const menuLogin = (state) => state.menu.login;
