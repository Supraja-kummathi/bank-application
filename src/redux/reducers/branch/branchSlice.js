import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {
  AxiosInstanceProtected,
  AxiosInstancePublic,
} from "../../../axios/AxiosInstance";
import { data } from "autoprefixer";
import toast from "react-hot-toast";

const initialState = {
  data: [],
  error: null,
  status: false,
  loading: false,
  success: false,
};

//=================Create Branch==============/
export const createBranch = createAsyncThunk(
  "createBranch",
  async (payload) => {
    try {
      const { data } = await AxiosInstanceProtected.post(
        `/branchs/save?bankId=${payload.bankId}`,
        payload
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
//=================Fetch MD==============/
export const getMdProfile = createAsyncThunk("getMdProfile", async () => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/managingDirectors/getMD`
    );

    return data;
  } catch (error) {
    return error.message;
  }
});
//=================Fetch all Branch==============/
export const getBranch = createAsyncThunk("getBranch", async (bankId) => {
  try {
    const { data } = await AxiosInstanceProtected.get(
      `/branchs/getAllBranch?bankId=${bankId}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//=================Fetch Branch By id==============/
export const getBranchById = createAsyncThunk(
  "getBranchById",
  async (branchId) => {
    try {
      const { data } = await AxiosInstanceProtected.get(
        `/branchs/getById?branchId=${branchId}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//=================Update Branch==============/
export const updateBranch = createAsyncThunk(
  "updateBranch",
  async (payload) => {
    try {
      const { data } = await AxiosInstanceProtected.put(
        `/branchs/update?branchId=${payload.branchId}`,
        payload
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
//=================Delete Branch==============/
export const deleteBranch = createAsyncThunk("deleteBranch", async (bankId) => {
  try {
    const { data } = await AxiosInstanceProtected.delete(
      `/branchs/delete?branchId=${bankId}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

//slice

export const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //create branch
    builder
      .addCase(createBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(createBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data.push(action.payload);
      })
      .addCase(createBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    //fetch md
    builder
      .addCase(getMdProfile.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getMdProfile.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getMdProfile.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch branch
    builder
      .addCase(getBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // fetch branch by id
    builder
      .addCase(getBranchById.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(getBranchById.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(getBranchById.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // update bank
    builder
      .addCase(updateBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(updateBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = state.data.map((el) =>
          action.payload.bankId === el.bankId ? action.payload : el
        );
      })

      .addCase(updateBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });

    // delete branch
    builder
      .addCase(deleteBranch.pending, (state) => {
        state.status = true;
        state.success = false;
      })
      .addCase(deleteBranch.fulfilled, (state, action) => {
        state.status = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(deleteBranch.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default branchSlice.reducer;
