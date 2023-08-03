import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { authSlice } from './authReducer';

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser = ({ email, password, nickname, avatar }) => async (
    dispatch,
    getState
) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = await auth.currentUser;
        await updateProfile(user,{
            displayName: nickname,
            photoURL: avatar            
        });
        const { displayName, uid, photoURL } = user;
        const updatedProfile = {
            nickname: displayName,
            userId: uid,
            avatar: photoURL
        };
        dispatch(updateUserProfile(updatedProfile));

    } catch (error) {
        console.log("error", error);

        console.log("error.message", error.message);
    }
};

export const authSignInUser = ({ email, password }) => async (dispatch, getState) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("user", user);
        dispatch(updateUserProfileWithPhotoURL(user));
    } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
    }
};

export const authSignOutUser = () => async (dispatch, getSatte) => {
    try {
        await signOut(auth);
        dispatch(authSignOut());
        console.log("Пользователь успешно вышел из системы.");
    } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
    }
};

export const authStateChangeUser = () => async (dispatch, getSatte) => {
    await auth.onAuthStateChanged((user) => {
        if (user) {
                    const updatedProfile = {
            nickname: user.displayName,
            userId: user.uid,
            email: user.email
        };
            dispatch(updateUserProfile(updatedProfile));
            dispatch(authStateChange({stateChange: true}));
        }
    });
};

export const updateUserProfileWithPhotoURL = (user) => async (dispatch) => {
    const { displayName, uid, photoURL } = user;
    const updatedProfile = {
        nickname: displayName,
        userId: uid,
        avatar: photoURL,
        email: email
    };
    dispatch(updateUserProfile(updatedProfile));
};

