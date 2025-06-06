import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
  PERSIST,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categories from './categories/categoriesSlice';
import products from './products/productsSlice';
import cart from './cart/cartSlice';
import wishlist from './wishlist/wishlistSlice'
import auth from './auth/authSlice';
import orders from './orders/ordersSlice';
import homeSlice from './Home/homeSlice';
import theme from './theme/themeSlice';
import languageSlice from "./language/languageSlice"; 


const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth", "language", "theme"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  products,
  homeSlice,
  theme,
  orders,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist: wishlist,
  language: languageSlice,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };