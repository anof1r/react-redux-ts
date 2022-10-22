
import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

// @ts-ignore
export const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk))