import {configureStore} from '@reduxjs/toolkit'
import { myAPI } from './api'
import { myReducer } from './reducer'

export const store = configureStore({
    reducer:{
        myapi:myAPI,
        myReducer:myReducer.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat('myapi')
})