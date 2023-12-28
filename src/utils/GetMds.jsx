import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { getMd } from "../redux/reducers/md/mdSlice";
import useMdState from "./useMdState";

const GetMds = () => {
  let dispatch = useDispatch();
  let val = useMdState();

  useEffect(() => {
    dispatch(getMd());
  }, [dispatch]);

  return val;
};

export default GetMds;
