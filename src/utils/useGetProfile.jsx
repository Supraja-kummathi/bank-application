import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { GetProfile } from "./../redux/reducers/auth/authSlice";
import useAuthState from './useAuthState';

const useGetProfile = () => {
  const dispatch = useDispatch();
  const data = useAuthState();
  useEffect(() => {
    dispatch(GetProfile());
  }, [dispatch]);
  return data;
};

export default useGetProfile;