import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, applyMiddleware } from "redux";

import rootReducer from "./Reducers/rootReducer";

// import math from "./Reducers/mathReducer";
// import user from "./Reducers/userReducer";

// export default createStore(
//   combineReducers({ math, user }),
//   {},
//   applyMiddleware(logger, thunk)
// );

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
