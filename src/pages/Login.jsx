import Lottie from "lottie-react";
import loginLottie from "./loginLottie.json"; // তোমার lottie json
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, loading, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const [errorText, setErrorText] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // console.log(location);
  const from = location.state || "/";
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    if (!email.match("@gmail.com")) {
      toast.error("Invalid Email");
      return;
    }
    if (pass.length < 6) {
      return;
    }
    setErrorText("");
    console.log(name);
    loginUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Login Successed!");
        navigate(from);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log();
        toast.error(errorMessage.slice(22, -2));
        setLoading(false);
        // ..
      });
  };
  console.log(email.match("@gmail.com"));
  return (
    <section className="min-h-screen bg-base-300 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-center  bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
        {/* Right Side - Lottie */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className=" flex items-center justify-center  "
        >
          <div className="lg:w-full w-100">
            <Lottie animationData={loginLottie} loop autoplay />
          </div>
        </motion.div>
        {/* Left Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-5 pt-0 flex flex-col items-center justify-center "
        >
          <h2 className="text-4xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-8">
            Login to continue your delicious journey 🍽️
          </p>

          <form onSubmit={handleLogin} className="space-y-6 w-full">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  placeholder="Enter your email"
                  className={`input input-bordered w-full pl-10 focus:outline-0 ${
                    !email.match("@gmail.com")
                      ? "focus:border-red-500"
                      : "focus:border-green-500"
                  }`}
                  required
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Passoword</span>
              </label>
              <div className="relative">
                <RiLockPasswordLine className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-400 text-lg" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorText(password);
                  }}
                  name="password"
                  placeholder="Enter your password"
                  className={`input input-bordered w-full pl-10 focus:outline-0 ${
                    password.length < 6
                      ? "focus:border-red-500"
                      : "focus:border-green-500"
                  }`}
                  required
                />
              </div>
              <span className="mt-1 text-sm ">
                Password should be at least 6 characters
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>
              <a className="link link-hover text-primary">Forgot password?</a>
            </div>

            <button className="btn btn-primary btn-lg w-full">
              {" "}
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/register">
              <span className="text-primary font-semibold cursor-pointer">
                Sign up
              </span>
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
