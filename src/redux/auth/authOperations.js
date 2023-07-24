import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from 'firebase/auth';
import { auth, db } from '../../firebase/config';

export const authSignUpUser = ({ email, password, nickname }) => async (
    dispatch,
    getState
) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);

        console.log("user", user);
    } catch (error) {
        console.log("error", error);

        console.log("error.message", error.message);
    }
};

export const authSignInUser = () => async (dispatch, getSatte) => {};

export const authSignOutUser = () => async (dispatch, getSatte) => {};