import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer"; // Import the menu reducer
import { authReducer, userReducer,forgotPassword } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { myOrderReducer, newOrderReducer, orderDetailsReducer } from "./reducer/orderReducer";


const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  auth: authReducer, // Add the menu reducer here
  user:userReducer,
  forgotPassword:forgotPassword,
  cart: cartReducer,
  newOrder:newOrderReducer,
  myOrders:myOrderReducer,
  orderDetails:orderDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
