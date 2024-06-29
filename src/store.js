import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import serviceReducer from "./features/servicesSlice"

const rootReducer = combineReducers({
  services: serviceReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [], // Persist only the auth slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(),
});

export const persistor = persistStore(store);
export { store }; // Ensure the store is exported correctly
export default store;