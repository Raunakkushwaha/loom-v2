import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Import reducers
import cartReducer from '../ecom/Redux/Cart';
import searchItems from '../ecom/Redux/SearchSlice';
import similarSliceReducer from '../ecom/Redux/Slice';
import authReducer from "../reducers/AuthReducer";
import chatReducer from "../reducers/ChatUserReducer";
import postReducer from "../reducers/PostReducer";

// Combine reducers
const rootReducer = combineReducers({
  similarProduct: similarSliceReducer,
  searchProduct: searchItems,
  cartProduct: cartReducer,
  authReducer,
  postReducer,
  chatReducer

});

// Manual Local Storage Persistence
function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem('store', serializedStore);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem('store');
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  preloadedState: persistedState, // Load state from localStorage
});

// Save state to localStorage on changes
store.subscribe(() => saveToLocalStorage(store.getState()));

export { store };
