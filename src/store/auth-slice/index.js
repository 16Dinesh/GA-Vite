/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

export const adminRegisterUser = createAsyncThunk(
  "/admin/register",

  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/admin/register",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const adminLoginUser = createAsyncThunk(
  "/admin/login",

  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/admin/login",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const adminLogoutUser = createAsyncThunk(
  "/admin/logout",

  async () => {
    const response = await axios.post(
      "http://localhost:5000/api/admin/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

export const checkAuth = createAsyncThunk(
  "/admin/check-auth",

  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/admin/check-auth",
      {
        withCredentials: true,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );

    return response.data;
  }
);

export const googleUser = createAsyncThunk(
  "user/googleLogin",
  async (userCredential) => {
    const response = await axios.post(
      "http://localhost:5000/api/user/google",
      userCredential,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminRegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(adminRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(adminLoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adminLoginUser.fulfilled, (state, action) => {
        console.log(`This is the LoginUser State ${action}`)
        console.log(action);

        state.isLoading = false;
        state.user = action.payload.success ? action.payload.role : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(adminLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        console.log(`This is the checkAuth State ${action}`)
        console.log(action);

        state.isLoading = false;
        state.user = action.payload.success ? action.payload.role : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(googleUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleUser.fulfilled, (state, action) => {
        console.log(`This is the googleUser State ${action}`)
        console.log(action);

        state.isLoading = false;
        console.log(action.payload)
        state.user = action.payload.success ? action.payload.role : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(googleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(adminLogoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
