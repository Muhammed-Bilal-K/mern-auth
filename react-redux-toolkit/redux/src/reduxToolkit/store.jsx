import { configureStore } from '@reduxjs/toolkit'
import ValueReducer from './ValueReducer'

const store = configureStore({
    reducer:{
        value : ValueReducer
    }
})


export default store;