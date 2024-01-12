import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/reducers/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import FormComp from "../../utils/FormComp";
import { FaLock } from "react-icons/fa";

const Login = ({ name }) => {
  const navigate = useNavigate();
  //const { userToken } = useSelector(state => state.auth);
  let dispatch = useDispatch();

  let [state, setState] = useState({
    email: "",
    password: "",
    userType: name,
  });
  let { email, password, userType } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (userToken) {
  //     navigate("/adminlayout");
  //   }
  // }, [navigate, userToken]);

  let handleSubmit = e => {
    e.preventDefault();
    let data = dispatch(userLogin(state));
    data.unwrap().then(x => {
      console.log(x);
      localStorage.setItem("access_token", x.token);
      if (x.role == "ADMIN") {
        window.location.assign("/adminlayout");
      }
      if (x.role == "MANAGING_DIRECTOR") {
        window.location.assign("/mdlayout");
      }
    });
  };

  return (
    <FormComp name={name + "Login"}>
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
        {/* <div className="form-group pt-3" value={userType} onChange={handleChange}>
          <label htmlFor=" userType" className="ps-6">Choose UserType</label>
          <div>
          <input type="radio" value="employee" name="userType" />
          emoployee
          <input type="radio" value="customer" name="userType" />
          customer
          </div>
        </div> */}

        <div className="form-group mx-6 pt-12 w-[88%]">
          <button
            className="py-1 w-full  rounded-md bg-blue-600 text-white"
            type="submit"
          >
            Login
          </button>
        </div>
        <footer className="flex items-center justify-center py-4  text-[rgb(157,155,155)]">
          <FaLock className="pe-1" />
          <span className="me-4">
            <Link to={"/forgotpassword"}> Forgot Password?</Link>
          </span>
          {/* <span>
            <Link to={"/register"}>Register</Link>
          </span> */}
        </footer>
      </form>
    </FormComp>
  );
};

export default Login;
{
  /* <div className="flex items-center justify-evenly pt-4 pb-10 text-[rgb(157,155,155)] text-sm">
  <button
    onClick={() => {
      setName("Switch To MD Login");
    }}
    className="md"
  >
    Switch To MD Login
  </button>
  <button
    onClick={() => {
      setName("Switch To Bank Manager Login");
    }}
    className="manager"
  >
    Switch To Bank Manager Login
  </button>
</div>; */
}
