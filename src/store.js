import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import math from "./Reducers/mathReducer";
import user from "./Reducers/userReducer";

export default createStore(
    combineReducers({ math, user }),
    {},
    applyMiddleware(logger, thunk)
);
