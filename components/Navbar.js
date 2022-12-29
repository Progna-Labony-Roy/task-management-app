import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logOut, githubLogin } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link href="/">
            <span className="ml-3 text-xl">TaskManager</span>
          </Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/addtask" className="mr-5 hover:text-gray-900 text-xs">
            Add Task
          </Link>
          <Link href="/mytask" className="mr-5 hover:text-gray-900 text-xs">
            My Task
          </Link>
          <Link
            href="/completedtask"
            className="mr-5 hover:text-gray-900 text-xs"
          >
            Completed Tasks
          </Link>
          <Link href="">
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </Link>
        </nav>
        {user?.uid ? (
          <>
            <button
              onClick={handleLogout}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <>
              <Link href="/login">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Register
                </button>
              </Link>
             
            </>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
