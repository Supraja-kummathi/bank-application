

import { Navigate } from "react-router-dom";
import useBankState from "../utils/useBankState";

const PrivateRoute = ({ children }) => {
//null or undefined
let {userToken} = useBankState();
console.log(userToken)
  if (userToken === null || undefined) {
    console.log(userToken)
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;