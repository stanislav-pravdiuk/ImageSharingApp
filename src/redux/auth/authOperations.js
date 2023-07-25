import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { authSlice } from './authReducer'

export const authSignUpUser = ({ email, password, nickname }) => async (
    dispatch,
    getState
) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = await auth.currentUser;
        await updateProfile(user,{
            displayName: nickname
        });
        const { displayName, uid } = user;
        const updatedProfile = {
            nickname: displayName,
            userId: uid
        };
        dispatch(authSlice.actions.updateUserProfile(updatedProfile));

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
    } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
    }
};

export const authSignOutUser = () => async (dispatch, getSatte) => { };

export const authStateChangeUser = () => async (dispatch, getSatte) => {
    await auth.onAuthStateChanged((user) => {
        if (user) {
                    const updatedProfile = {
            nickname: user.displayName,
            userId: user.uid
        };
            dispatch(authSlice.actions.updateUserProfile(updatedProfile));
            dispatch(authSlice.actions.authStateChange({stateChange: true}));
        }
    });
};

// user {
//     "_tokenResponse": {
//         "email": "stanislav@gmail.com",
//             "expiresIn": "3600",
//                 "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZGZmNzhhMGJkZDVhMDIyMTIwNjM0OTlkNzdlZjRkZWVkMWY2NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXBwLW9uLXJlYWN0LW5hdGl2ZSIsImF1ZCI6ImFwcC1vbi1yZWFjdC1uYXRpdmUiLCJhdXRoX3RpbWUiOjE2OTAxODgwMzMsInVzZXJfaWQiOiJyOVJ5dk5UUUJYV3ZoZkJXcHBGVFFrYW43ODQzIiwic3ViIjoicjlSeXZOVFFCWFd2aGZCV3BwRlRRa2FuNzg0MyIsImlhdCI6MTY5MDE4ODAzMywiZXhwIjoxNjkwMTkxNjMzLCJlbWFpbCI6InN0YW5pc2xhdkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic3RhbmlzbGF2QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.iLrh4YHNtOjUitR_IL1MG-rV0Ffp_Z8g9YgRoZA7SKNlwTFp3c6gso_MYuqm1Y_GB1B6LM5wuMp5hE5PAvaFRqpgSCFwvm7NuBIoQO2gtp2ktvNuSs8llSeSQXz31AeHaKoP1aQIGAAaluX7dfzdIxMqeuTf0JJN1GArRqlGN1jrsIVmoItDaNesnV9IuabGDsjDciQ9pQ0JEcLG1P4i-uLu8mF_gJJz2X10hgCCnM4JV1LIuHw7wvIhvWwnXHRp2RV60ehKFKq-VS-oZNsDILHb-93lrDxPHduQj9h46wcKDB-W3wUui-2yrkCJht8YjduGhw52IxRR6CvyQYC6rg", "kind": "identitytoolkit#SignupNewUserResponse", "localId": "r9RyvNTQBXWvhfBWppFTQkan7843", "refreshToken": "AMf-vBzZwnTsgFmlmZwyAu0ky5RLBQ-PxppspfIT7ic1PkmtDnwOMoJ7Vx6KNDPtMjRKQwAbNVHvcZ1mw2ndSgKkbX-zOvXEpR8zrrffmmKz3rXZ56if2edsPLd5W1yZHEOQo4daP1PsP9_Smbi8OE8GWkHvvN1_PEvlwJ6qWDotflam8y8gNDEaQLOTkwQC0adPryteQr_FBMFAtUFvgyaSEKXmn7-NaQ"
//     }, "operationType": "signIn",
//         "providerId": null,
//         "user": {
//             "_redirectEventId": undefined,
//             "apiKey": "AIzaSyAx7BLeXj4T9gMspzeOlsYiQ5EB1FChpkU",
//             "appName": "[DEFAULT]",
//             "createdAt": "1690188033448",
//             "displayName": undefined,
//             "email": "stanislav@gmail.com",
//             "emailVerified": false,
//             "isAnonymous": false,
//             "lastLoginAt": "1690188033448",
//             "phoneNumber": undefined,
//             "photoURL": undefined,
//             "providerData": [Array],
//             "stsTokenManager": [Object],
//             "tenantId": undefined,
//             "uid": "r9RyvNTQBXWvhfBWppFTQkan7843"
//     }
// };