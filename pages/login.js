import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../components/AuthProvider";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const router = useRouter();  

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
        router.push('/');
        toast('Login successful!');
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
        const user = result.user;
        console.log(user);
        router.push('/');
       
    })
    .catch(err => console.error(err));
}

  return (
      <div className="container mx-auto items-center">
        <div className="rounded-lg">
          <form
            onSubmit={handleLogin}
            className="form-style bg-white shadow-md rounded px-6 py-6 my-6 lg:mx-80 md:mx-20 mx-5"
          >
            <h2 className="text-gray-900 text-xl font-bold  title-font mb-5">
              Please, Log in
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="*************"
              />
            </div>
            <p>
              If you don't have an account, please{" "}
              <Link
                href="/register"
                className="text-teal-400 font-bold hover:text-lg"
              >
                Register
              </Link>
            </p>
            <div className="flex items-center justify-between mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <button onClick={handleGoogleSignIn}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Google SignIn
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-500 mt-3"></p>
        </div>
      </div>
  );
};

export default login;
