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

//=================Create Branch==============/
export const createBranchManager = createAsyncThunk(
  "createBranchManager",
  async (payload) => {
    try {
      const { data } = await AxiosInstanceProtected.post(
        `/branchManagers/save?branchId=${payload.branchId}`,
        payload
      );
     return data;
    } catch (error) {
      return error.message;
    }
  }
);
//=================Fetch all Branch==============/
export const getBranchManager = createAsyncThunk("getBranchManager", async (bankId) => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/branchManagers/getAll?bankId=${bankId}`
    );  
    return data;

  } catch (error) {
    return error.message;
  }
});

//=================Fetch all unassigned==============/
export const getAllUnassigned = createAsyncThunk("getAllUnassigned", async (bankId) => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/branchs/getAllUnAssigned?bankId=${bankId}`
    );  
    return data;

  } catch (error) {
    return error.message;
  }
});


//=================Fetch Branch By id==============/
export const getBranchManagerById = createAsyncThunk("getBranchManagerById", async (employeeId) => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/branchManagers/getById?branchManagerId=${employeeId}`
    );  
    return data;

  } catch (error) {
    return error.message;
  }
});

//=================Update Branch==============/
export const updateBranchManager = createAsyncThunk(
  "updateBranchManager",
  async (payload) => {
    try {
      const { data } = await AxiosInstanceProtected.put(
        `/branchManagers/update?branchManagerId=${payload.employeeId}`,
        payload
      );
       return data;
    } catch (error) {
      return error.message;
    }
  }
);
//=================Delete Branch==============/
export const deleteBranchManager = createAsyncThunk("deleteBranchManager", async (employeeId) => {
  try {
    const { data } = await AxiosInstanceProtected.delete(
      `/branchManagers/delete?branchManagerId=${employeeId}`
    )
    return data;
  } catch (error) {
    return error.message;
  }
});

//slice

export const branchManagerSlice = createSlice({
  name: "branchManager",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //create branch
    builder
      .addCase(createBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(createBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data.push(action.payload);
      })
      .addCase(createBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch all unassigned 
    builder
      .addCase(getAllUnassigned.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getAllUnassigned.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getAllUnassigned.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch branch
    builder
      .addCase(getBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // update bank
    builder
      .addCase(updateBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map((el) =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })

      .addCase(updateBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete branch
    builder
      .addCase(deleteBranchManager.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteBranchManager.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(deleteBranchManager.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default branchManagerSlice.reducer;
