import { useDispatch } from "react-redux";
import useBankState from "./useBankState";
import { useEffect } from "react";
import { getBank } from "../redux/reducers/bank/bankSlice";

const useGetBank = () => {
  const dispatch = useDispatch();
  const val = useBankState();
  useEffect(() => {
    dispatch(getBank());
  }, [dispatch]);
   return val
};

export default useGetBank;
