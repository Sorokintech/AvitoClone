import { configureStore, combineReducers  } from "@reduxjs/toolkit"; //PreloadedState добавить
import { skyVitoApi } from "./services";
import { countReducer } from "./reducers/counter";
import searchReducer from "./slices/search";
import currentItemReducer from "./slices/article";
import authReducer from "./slices/auth";
import currentUserReducer from "./slices/currentUser";
import modalReducer from "./slices/modal";



const rootReducer = combineReducers({
    [skyVitoApi.reducerPath]: skyVitoApi.reducer,
    search: searchReducer,
    current: currentItemReducer,
    auth: authReducer,
    user: currentUserReducer, 
    modal: modalReducer
  });

export const store = configureStore({
    reducer: rootReducer, 
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skyVitoApi.middleware),
});
