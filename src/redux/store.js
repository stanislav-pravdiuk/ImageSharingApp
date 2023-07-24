// import { configureStore } from '@reduxjs/toolkit';
// import {
//     persistReducer,
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import authReducer from './auth/authOperations';

// const authPersistConfig = {
//     key: 'auth',
//     storage: AsyncStorage,
//     // whitelist: ['user']
// };

// export const store = configureStore({
//     reducer: {
//         auth: persistReducer(authPersistConfig, authReducer),
//     },

//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// });

// export let persistor = persistStore(store);

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth/authReducer';

const roortReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
    reducer: roortReducer,
});