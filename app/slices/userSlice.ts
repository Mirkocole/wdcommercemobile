import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserState {
  currentUser: any;
}

const initialState: UserState = {
  currentUser: null,
};

export const getInitUser = createAsyncThunk('user/getInitUser', async (_, thunkAPI) => {
  console.log('Fetching initial user data... ThunkApi:', thunkAPI.getState());
  // Simulate an async operation to fetch user data
  const userData = await new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: 'John Doe' }), 1000)
  );
  return userData;
});

export const setAppUser = createAsyncThunk('user/setAppUser', async (user: any) => {
  console.log('User:', user);
  // Simulate an async operation to set user data
  return user;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    resetCurrentUser(state) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(setAppUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { setCurrentUser, resetCurrentUser } = userSlice.actions;

export default userSlice.reducer;