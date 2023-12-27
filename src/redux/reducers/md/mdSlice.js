import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {
  AxiosInstanceProtected,
  AxiosInstancePublic,
} from "../../../axios/AxiosInstance";
import { data } from "autoprefixer";

const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};

//=================Create Bank==============/
export const createMd = createAsyncThunk("createMd", async (payload) => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await AxiosInstanceProtected.post(`/managingDirectors/save`, payload);
    console.log(data)
    return data;
  } catch (error) {
    return error.message;
  }
});

export const getMd = createAsyncThunk("getMd", async () => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await AxiosInstancePublic.get(`/banks`);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const updateMd = createAsyncThunk("updateMd", async (payload) => {
  try {
    const { data } = await AxiosInstancePublic.put(
      `/banks/bankId/${payload.bankId}`,
      payload
    );
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const deleteMd = createAsyncThunk("deleteMd", async (bankId) => {
  try {
    console.log(bankId);
    const { data } = await AxiosInstancePublic.delete(`/banks/bankId/${bankId}`);
    return data;
  } catch (error) {
    return error.message;
  }
});

//slice

export const mdSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //REGISTER
    builder
      .addCase(createMd.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(createMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data.push(action.payload);
      })
      .addCase(createMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch bank
    builder
      .addCase(getMd.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // update bank
    builder
      .addCase(updateMd.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map((el) =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })

      .addCase(updateMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete bank
    builder
      .addCase(deleteMd.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteMd.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map((el) =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })

      .addCase(deleteMd.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default mdSlice.reducer;
