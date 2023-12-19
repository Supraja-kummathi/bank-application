import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/reducers/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../utils/Button";
import FormComp from "../../utils/FormComp";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { userToken } = useSelector(state => state.auth);
  let dispatch = useDispatch();
  let [name,setName]=useState("customer login")
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [navigate, userToken]);

  let handleSubmit = e => {
    e.preventDefault();
    dispatch(userLogin(state));
  
  };
 
  return (
    <FormComp name={name} >
       <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="email">email</label> */}
          <input
            type="email"
            className="form-control p-2 border-b-2 w-[88%] mx-6 mb-4"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email-id"
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">password</label> */}
          <input
            type="password"
            className="form-control p-2 border-b-2 w-[88%] mx-6"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          
          />
        </div>

        <div className="form-group pt-12">
          <button className="py-1 px-[9.8rem] mx-6 rounded-md bg-blue-600 text-white" type="submit">Login</button>
          
        </div>
        <footer className="flex items-center justify-center py-4  text-[rgb(157,155,155)]">
        <FaLock className="pe-1" /><span className="me-4"><Link> Forgot Password?</Link> </span> <span><Link>Register</Link> </span>
        </footer>
        <div className="flex items-center justify-evenly pt-4 pb-10 text-[rgb(157,155,155)] text-sm">
          <button onClick={()=>{setName("Switch To MD Login")}} className="md">Switch To MD Login</button>
          <button onClick={()=>{setName("Switch To Bank Manager Login")}} className="manager">Switch To Bank Manager Login</button>
        </div>
      </form>
    </FormComp>
   
     

  );
};

export default Login;
