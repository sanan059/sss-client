import { useForm } from "react-hook-form";
import { AuthServices } from "../../Services/AuthServices/AuthServices";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // HOOKS
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // SERVICES
  const Services = new AuthServices();
  const submitForm = async (user) => {
    const {data} = await Services.SignIn(user);
    console.log(data);
    if(data.messageType === "success") {
      localStorage.setItem("token", data.token);
      return navigate("/dashboard")
    }
    
  }

  return <>
    <form onSubmit={handleSubmit(submitForm)}>
      {/* Email input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
        <input type="email" id="form2Example1" className="form-control" {...register("email", {required: true} )} />
      </div>
      {/* Password input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
        <input type="password" id="form2Example2" className="form-control" {...register("password", {required: true, minLength: 8} )} />
      </div>
      {/* Submit button */}
      <button type="submit" className="w-100 btn btn-primary btn-block mb-4">
        Sign in
      </button>
      {/* Register buttons */}
      {/* <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f" />
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google" />
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter" />
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github" />
        </button>
      </div> */}
    </form>

  </>
}

export default SignIn;