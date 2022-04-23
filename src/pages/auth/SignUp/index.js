import React from "react";
import "../../auth/index.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      if (users.find((user) => user.email === data.email)) {
        setError("email", { type: "focus", message: "Email already exists" });
      } else {
        localStorage.setItem("users", JSON.stringify([...users, data]));
        navigate("/signin");
      }
    } else {
      localStorage.setItem("users", JSON.stringify([data]));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true" />
          </div>
          <div className="col-lg-12 login-title">SignUP Page</div>
          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="form-control-label">Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="form-control"
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-control-label">Password</label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="form-control"
                    i
                  />
                </div>
                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary center">
                      REGISTER
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
