import { useSelector } from "react-redux";

const useBankState = () => {
  let data = useSelector(state => state);
  return data;
};

export default useBankState;
