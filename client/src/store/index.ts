import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reportReducer from "../reducers/reportReducer";
import helperReducer from "../reducers/helperReducer";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const rootReducer = combineReducers({
    reportReducer,
    helperReducer
});

// apply enhancers
const customEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(rootReducer, customEnhancer(applyMiddleware(thunk)));

export default store;
