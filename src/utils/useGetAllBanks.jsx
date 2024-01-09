import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useBankState from "./useBankState";
import { getBank } from "../redux/reducers/bank/bankSlice";


const useGetBanks = () => {
  const dispatch = useDispatch();
  const bank = useBankState();  
  useEffect(() => {
    dispatch(getBank());
  }, [dispatch]);

   return bank

};

export default useGetBanks;
