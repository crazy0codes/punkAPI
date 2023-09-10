import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username : "",
        password : "",
        auth : false
    },
    reducers: {
        login: (state, action) => {
            console.log("Action payload:", action.payload);
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.auth = true;
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;