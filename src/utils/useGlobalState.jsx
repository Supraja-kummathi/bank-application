import { useSelector } from "react-redux";

const useGlobalState = () => {
  let data = useSelector(state => state.auth);
  return data;
};

export default useGlobalState;
