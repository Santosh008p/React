import { configureStore } from '@reduxjs/toolkit';

const placeholderReducer = (state = {}, action) => state;

const store = configureStore({
    reducer: {
        placeholder: placeholderReducer,
    }
});

export default store;
