import { configureStore } from '@reduxjs/toolkit';
// import { themeSlice } from './theme/themeSlice';


const store = configureStore({
    reducer: {
        // theme: themeSlice.reducer
    },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;