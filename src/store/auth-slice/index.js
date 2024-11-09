/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

//admin-Register
export const adminRegisterUser = createAsyncThunk(
  "/user/register",

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

//admin-login
export const adminLoginUser = createAsyncThunk(
  "/user/login",

  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/user/login",
      formData,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

//admin-login
export const adminLogoutUser = createAsyncThunk(
  "/user/logout",

  async () => {
    const response = await axios.post(
      "http://localhost:5000/api/user/logout",
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
);

//to check-Auth
export const checkAuth = createAsyncThunk(
  "/user/check-auth",

  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/user/check-auth",
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

//User-Register
export const registerUser = createAsyncThunk(
  "/user/register-user",

  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/user/register-user",
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

//User-Login
export const loginUser = createAsyncThunk(
  "/user/login-user",

  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/user/login-user",
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

//User-Google-Auto-login
export const googleUser = createAsyncThunk(
  "/user/googleLogin",

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

export const googleUserFireBase = createAsyncThunk(
  "/user/google-firebase",

  async (data) => {
    const response = await axios.post(
      "http://localhost:5000/api/user/google-firebase",
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

export const anonymousFireBase = createAsyncThunk(
  "/user/anonymous",

  async (resData) => {
    const response = await axios.post(
      "http://localhost:5000/api/user/anonymous",
      resData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

export const phoneNumberFireBase = createAsyncThunk(
  "/user/number-login",

  async (phoneNumber) => {
    const response = await axios.post(
      "http://localhost:5000/api/user/number-login",
      phoneNumber,
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
        console.log(`This is the LoginUser State ${action}`);
        console.log(action);

        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user.role : "";
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
        console.log(`This is the checkAuth State ${action}`);
        console.log(action);

        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user.role : "";
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
        console.log(`This is the googleUser State ${action}`);
        console.log(action);

        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user.role : "";
        state.isAuthenticated = action.payload.success;
      })
      .addCase(googleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(googleUserFireBase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleUserFireBase.fulfilled, (state, action) => {
        console.log(`This is the googleUser State ${action}`);
        console.log(action);

        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user.role : "";
        state.isAuthenticated = action.payload.success;
      })
      .addCase(googleUserFireBase.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user.role : "";
        state.isAuthenticated = action.payload.success;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(anonymousFireBase.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(anonymousFireBase.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user.role : "";
        state.isAuthenticated = action.payload.success;
      })
      .addCase(anonymousFireBase.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(phoneNumberFireBase.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(phoneNumberFireBase.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user.role : "";
        state.isAuthenticated = action.payload.success;
      })
      .addCase(phoneNumberFireBase.rejected, (state, action) => {
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
