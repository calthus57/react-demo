// 1 引入redux
import {applyMiddleware, combineReducers, createStore } from 'redux'
import cinemaListReducer from './reducer/CinemaListReducer';
import cityReducer from './reducer/CityReducer';
import tabbarReducer from './reducer/TabbarReducer';
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';



const reducer = combineReducers({
  cityReducer:cityReducer,
  tabbarReducer:tabbarReducer,
  cinemaListReducer:cinemaListReducer
})

// 持久化storage
const persistConfig={
  // 存储在localstorage中的key
  key:'dcf', 
  storage,
  whitelist:['cityReducer']
}

const persistedReducer = persistReducer(persistConfig,reducer)


const store = createStore(persistedReducer,applyMiddleware(reduxThunk,reduxPromise))

let persistor = persistStore(store)


export {store,persistor}