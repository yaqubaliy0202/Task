import React from "react";
import "../../auth/index.css"
import { useForm} from "react-hook-form";
import { useNavigate} from "react-router-dom";

const SignInPage = () => {
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
      const currentUser = users.find((user) => user.email === data.email);
      if (currentUser) {
        if (currentUser.password === data.password) {
          localStorage.setItem("user", JSON.stringify(currentUser));
        navigate("/homePage");
        } else {
          setError("password", {
            type: "focus",
            message: "Incorrect Password!",
          });
        }
      } else {
        setError("email", { type: "focus", message: "Email not exist!" });
      }
    }
    console.log("data: ", data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2" />
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true" />
          </div>
          <div className="col-lg-12 login-title">SignIn Page</div>
          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
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
                  <label className="form-control-label">PASSWORD</label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className="form-control"
                    i
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                  )}
                </div>
                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">
              
                  </div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">
                      LOGIN
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

export default SignInPage;
