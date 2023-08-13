const { createSlice } = require("@reduxjs/toolkit");
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
    uiMode: 'dark',
    ticketData: [],
    eventTypes:{}
}
const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeUiMode: (state, action) => {
            state.uiMode = state.uiMode == 'dark' ? 'light' : 'dark'
        },
        saveTicketData: (state, action) => {
            state.ticketData = action.payload
        },
        saveEventTypes: (state, action) => {
            state.eventTypes = action.payload
        },
        
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        },
    },
})

export const {
    changeUiMode,
    saveTicketData,
    saveEventTypes
} = globalSlice.actions

export default globalSlice.reducer