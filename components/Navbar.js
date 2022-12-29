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
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link href="/"><span className="ml-3 text-xl">TaskManager</span></Link>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/addtask" className="mr-5 hover:text-gray-900 text-xs">
            Add Task
          </Link>
          <Link href="/mytask" className="mr-5 hover:text-gray-900 text-xs">
            My Task
          </Link>
          <Link href="/completedtask" className="mr-5 hover:text-gray-900 text-xs">
            Completed Tasks
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
