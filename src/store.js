/** @format */

import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import menuSlice from "./templates/menu/menuSlice";

/**
 * Настройки для store redux
 */

const rootReducer = combineReducers({
    menu: menuSlice,
});

const store = configureStore({reducer: rootReducer, middleware: [thunk]});

export {store};