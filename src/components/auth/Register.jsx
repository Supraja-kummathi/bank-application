import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/reducers/auth/authSlice";
import FormComp from "../../utils/FormComp";

const Register = () => {
  let dispatch = useDispatch();

  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  let { name, email, password, avatar } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk(state));
  };
  return (
    <div>
      <h1>Register</h1>
      <FormComp>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">avatar</label>
          <input
            type="avatar"
            className="form-control"
            id="avatar"
            name="avatar"
            value={avatar}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button>register</button>
        </div>
      </form>
      </FormComp>
    </div>
  );
};

export default Register;
