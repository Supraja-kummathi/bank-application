import { useDispatch } from "react-redux";
import useGlobalState from "./useGlobalState";
import { useEffect } from "react";
import { GetProfile } from "./../redux/reducers/auth/authSlice";

const useGetProfile = () => {
  const dispatch = useDispatch();
  const data = useGlobalState();
  useEffect(() => {
    dispatch(GetProfile());
  }, [dispatch]);
  return data.userInfo;
};

export default useGetProfile;
