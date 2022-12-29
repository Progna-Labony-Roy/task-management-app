import React, { useContext, useState } from "react";
import Link from "next/link";
import { AuthContext } from "../components/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState();
  // useTitle('Sign Up');

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name);

    createUser(email, password)
      .then((result) => {
        setError("");
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Registered successfully")
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
      <div className="container mx-auto items-center">
        <div className="rounded-lg">
          <form
            onSubmit={handleSignin}
            className="form-style bg-white shadow-md rounded px-6 py-6 my-6 lg:mx-80 md:mx-20 mx-5"
          >
            <h2 className="text-gray-900 text-xl font-bold  title-font mb-5">
              Sign Up
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-semibold"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-teal-400 font-bold hover:text-lg"
              >
                Login
              </Link>
            </p>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-xs text-rose-600 mt-3">{error}</p>
        </div>
      </div>
  );
};

export default register;
