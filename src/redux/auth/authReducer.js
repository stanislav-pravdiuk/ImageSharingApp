import { createSlice } from "@reduxjs/toolkit";

const state = {
    userId: null,
    nickname: null,
    email:null,
    stateChange: false,
    avatar: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: state,
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            userId: payload.userId,
            nickname: payload.nickname,
            email: payload.email,
            avatar: payload.avatar
        }),
        authStateChange: (state, { payload }) => ({
            ...state,
            stateChange: payload.stateChange
        }),
        authSignOut: () => state,
    },
});


