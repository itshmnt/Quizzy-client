import { createSlice } from '@reduxjs/toolkit';

const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setUserId : (state, action) => {
            state.userId= action.payload;
        }
    }
});

export const { setUserId } = resultReducer.actions;
export default resultReducer.reducer;