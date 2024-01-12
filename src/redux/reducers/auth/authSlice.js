/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstanceProtected, AxiosInstancePublic } from "./../../../axios/AxiosInstance";


//LOCAL_STORAGE
// initialize userToken from local storage
const userToken = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : null;

const initialState = {
  data: [],
  userInfo: null,
  error: null,
  userToken,
  status: false,
  loading: false,
  success: false,
};

//?===================REGISTER ==========================//

export const registerThunk = createAsyncThunk("register", async payload => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await AxiosInstancePublic.post(`/users`, payload);
    return data;
  } catch (error) {
    return error.message;
  }
});

//?========================LOGIN ================================//
export const userLogin = createAsyncThunk(
  "/auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await AxiosInstancePublic.post(
        `/login?users=${payload.userType}`,
        payload
      );
      // store user's token in local storage
      localStorage.setItem("access_token", data?.data?.token);
      console.log(localStorage.getItem("access_token"));
      return data.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//?========================GETPROFILE ================================//

export const GetProfile = createAsyncThunk("/admins/getAdmin", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(`/admins/getAdmin`);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem("access_token"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.status = false;
    },
  },

  extraReducers: builder => {
    //REGISTER
    builder
      .addCase(registerThunk.pending, state => {
        state.status = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = false;
        state.data.push(action.payload);
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
    //LOGIN
    builder
      .addCase(userLogin.pending, state => {
        state.status = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.status = false;
        state.userInfo = payload.data;
        state.userToken = payload.userToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.status = false;
        // state.error = action.error.message;
        state.loading = false;
        state.error = payload;
      });

    //GETPROFILE
    builder
      .addCase(GetProfile.pending, state => {
        state.status = true;
        state.error = null;
      })
      .addCase(GetProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.status = false;
        state.userInfo = payload;
      })
      .addCase(GetProfile.rejected, (state, { payload }) => {
        state.status = false;
        state.loading = false;
        state.error = payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
