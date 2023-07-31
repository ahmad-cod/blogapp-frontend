import { useState } from "react";
import authService from "../../services/auth";
import blogService from "../../services/blogs";
import Header from "../Header";
import SignupForm from "./SignupForm";
import Notification from "../Notification";
import { useDispatch } from "react-redux";
import { setNotification } from "../../reducers/notificationReducer";
import { setUser } from "../../reducers/userReducer";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, 'username', password, 'password')

    try {
      const user = await authService.login({ username, password });
      console.log(user);
      if (!user) {
        dispatch(
          setNotification({
            type: "error",
            message: "Wrong username or password",
          })
        );
      } else {
        dispatch(setUser(user));
        blogService.setToken(user.token);
        window.localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
    setUsername('')
    setPassword('')
  };

  return (
    <>
      <Notification />
      <section className="grid h-screen lg:-mt-20 sm:place-content-center sm:-mt-[20%] md:-mt-[10%]">
        <div className="w-full max-w-sm  sm:w-[700px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to Blogs
            </h5>
            <div>
              <label
                for="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="aroyehun"
                value={username}
                onChange={({ target }) => {
                  console.log(target.value)
                  setUsername(target.value)
                  console.log(username)
                }
                }
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to='/signup'
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
