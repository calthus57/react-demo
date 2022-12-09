// 1 引入redux
import {applyMiddleware, combineReducers, createStore } from 'redux'
import cinemaListReducer from './reducer/CinemaListReducer';
import cityReducer from './reducer/CityReducer';
import tabbarReducer from './reducer/TabbarReducer';
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
  cityReducer:cityReducer,
  tabbarReducer:tabbarReducer,
  cinemaListReducer:cinemaListReducer
})


const store = createStore(reducer,applyMiddleware(reduxThunk,reduxPromise));

export default store