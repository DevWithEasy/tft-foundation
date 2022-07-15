import { createStore } from "redux";
import { userReducer } from './Reducer';

export const store = createStore(userReducer);