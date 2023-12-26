import { useDispatch } from "react-redux";
import useBankState from "./useBankState";
import { useEffect } from "react";
import { GetProfile } from "./../redux/reducers/auth/authSlice";

const useGetProfile = () => {
  const dispatch = useDispatch();
  const data = useBankState();
  useEffect(() => {
    dispatch(GetProfile());
  }, [dispatch]);
  return data.userInfo;
};

export default useGetProfile;
