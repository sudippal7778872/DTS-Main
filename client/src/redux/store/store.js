import { createStore,applyMiddleware  } from "redux";
import rootReducer from "../Reducers/RootReducer";
import thunk from 'redux-thunk';

let store = applyMiddleware(thunk)(createStore)(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;