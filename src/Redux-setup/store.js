import { createStore, combineReducers } from 'redux';
import reducers from './Reducer/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig ={
    key:'root',
    storage: storage,
    whitelist: ['cart']

}


const pReducer = persistReducer(persistConfig, reducers);

 const store = createStore(pReducer);
export const persistor = persistStore(store);

export default store;