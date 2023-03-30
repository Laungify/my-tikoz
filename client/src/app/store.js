import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "@reduxjs/toolkit";

//https://bionicjulia.com/blog/clear-redux-toolkit-state-with-redux-persist-and-typescript
//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
// follow the recommended persist from docs https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist

import {
  toggleReducer,
  eventDataReducer,
  toggleComponentTruthyReducer,
  cartReducer,
  userReducer,
} from "../features";
import ticketsServiceApi from "../features/slices/ticketsService/ticketsServiceApi.js"


const stateSerializer = (state) => {
  // serialize the state
  return JSON.stringify(state);
};

const stateDeserializer = (state) => {
  // deserialize the state
  return JSON.parse(state);
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "eventsDataReducer",
    "toggleComponentTruthy",
    "toggleComponent",
    "userData",
  ],
  // throttle: 500,
  version: 1,
};

const rootReducer = combineReducers({
  toggleComponent: toggleReducer,
  eventsDataReducer: eventDataReducer,
  toggleComponentTruthy: toggleComponentTruthyReducer,
  cartData: cartReducer,
  userData: userReducer,
  [ticketsServiceApi.reducerPath]: ticketsServiceApi.reducer,
});

// persistStore expects a function as a parameter, then we have to combine the reducer using combineReducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
