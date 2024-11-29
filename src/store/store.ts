import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({})
const store = configureStore({ reducer: reducers })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>