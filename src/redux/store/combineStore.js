import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import storeAccount from "./user/userAccount";
import storeProduct from "./store-product/storeProduct";
import showInfoProduct from "./store-product/showInfoProduct";

const combineStore = combineReducers({
     storeAccount: storeAccount,
     storeProduct: storeProduct,
     showInfoProduct: showInfoProduct
})


export default combineStore
