import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-hot-toast";

const login = () => {
  const { signIn } = useContext(AuthContext);
  //   const navigate=useNavigate();
  //   const location =useLocation();
  //   useTitle('Login');

  //   const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Signed in successfully")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div class="container mx-auto items-center">
        <div class="rounded-lg">
          <form
            onSubmit={handleLogin}
            class="form-style bg-white shadow-md rounded px-6 py-6 my-6 lg:mx-80 md:mx-20 mx-5"
          >
            <h2 class="text-gray-900 text-xl font-bold  title-font mb-5">
              Please, Log in
            </h2>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="*************"
              />
            </div>
            <p>
              If you don't have an account, please{" "}
              <Link
                href="/signup"
                className="text-teal-400 font-bold hover:text-lg"
              >
                Sign up
              </Link>
            </p>
            <div class="flex items-center justify-between mt-4">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Google SignIn
              </button>
            </div>
          </form>

          <p class="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default login;
