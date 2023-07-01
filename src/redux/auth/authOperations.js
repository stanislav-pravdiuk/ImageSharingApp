import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '../config';

// Асинхронний thunk для реєстрації користувача
export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, password }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
});

// Асинхронний thunk для входу користувача
export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    throw error;
  }
});

// Асинхронний thunk для оновлення профілю користувача
export const updateUserProfile = createAsyncThunk('auth/updateUserProfile', async (update) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
