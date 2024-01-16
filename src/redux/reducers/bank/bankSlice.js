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
export const createBank = createAsyncThunk("createBank", async payload => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await AxiosInstanceProtected.post(`/banks`, payload);
    return data;
  } catch (error) {
    return error.message;
  }
});
//=================Fetch all Bank==============/
export const getBank = createAsyncThunk("getBank", async () => {
  try {
    // eslint-disable-next-line no-undef
    const { data } = await AxiosInstanceProtected.get(`/banks/getAll`);
    return data;
  } catch (error) {
    return error.message;
  }
});

//=================get by BankId==============/
export const getBankById = createAsyncThunk("getBankById", async bankId => {
  try {
    const { data } = await AxiosInstanceProtected.get(`/banks/bankId/${bankId}`);
    return data;
  } catch (error) {
    return error.message;
  }
});
//=================Update Bank==============/
export const updateBank = createAsyncThunk("updateBank", async payload => {
  try {
    const { data } = await AxiosInstanceProtected.put(
      `/banks/bankId/${payload.bankId}`,
      payload
    );
    return data.payload;
  } catch (error) {
    return error.message;
  }
});
//=================Delete Bank==============/
export const deleteBank = createAsyncThunk("deleteBank", async bankId => {
  try {
    console.log(bankId);
    const { data } = await AxiosInstanceProtected.delete(
      `/banks/bankId/${bankId}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//slice

export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //REGISTER
    builder
      .addCase(createBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(createBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data.push(action.payload);
      })
      .addCase(createBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch bank
    builder
      .addCase(getBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

      
    // get bank by id
    builder
      .addCase(getBankById.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBankById.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBankById.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // update bank
    builder
      .addCase(updateBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map(el =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })

      .addCase(updateBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete bank
    builder
      .addCase(deleteBank.pending, state => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteBank.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(deleteBank.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default bankSlice.reducer;
