import { configureStore } from "@reduxjs/toolkit";

const reducer = (state, action) => {
    console.log('Store обновлен');

}


const store = configureStore()