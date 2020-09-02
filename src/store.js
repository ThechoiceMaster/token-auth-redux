import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/loginReducer";
import Cookie from 'js-cookie';
import { userRegisterReducer } from "./reducers/registerReducer";


const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  userLogin: { userInfo },
};
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
