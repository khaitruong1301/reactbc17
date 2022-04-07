import {combineReducers,createStore,compose, applyMiddleware} from 'redux';
import { fakeBookAppReducer } from './reducers/fakeBookAppReducer';
import { gameXucXacReducer } from './reducers/gameXucXacReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import { quanLyNguoiDungReducer } from './reducers/quanLyNguoiDungReducer';
import { toDoListReducer } from './reducers/toDoListReducer';
//Cấu hình redux thunk
import thunk from 'redux-thunk'

//rootReducer xem như state tổng của ứng dụng
const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    gameXucXacReducer: gameXucXacReducer,
    gioHangReducer,
    quanLyNguoiDungReducer:quanLyNguoiDungReducer,
    fakeBookAppReducer:fakeBookAppReducer,
    toDoListReducer:toDoListReducer
    //
});


//Cấu hình thunk
const middleWare = applyMiddleware(thunk)


const customCompose = compose(middleWare,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export const store = createStore(rootReducer, customCompose);