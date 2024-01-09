import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMdProfile } from "../redux/reducers/branch/branchSlice";
import useBranchState from "./useBranchState";


const useGetMd = () => {
  const dispatch = useDispatch();
  const bm = useBranchState();
  useEffect(() => {
    dispatch(getMdProfile());
  }, [dispatch]);
  return bm;
};

export default useGetMd;
