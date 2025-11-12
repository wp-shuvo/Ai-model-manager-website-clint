import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, singOutUser } = use(AuthContext);

  //SingOut Or LogOut user
  const handleSingOut = () => {
    singOutUser()
      .then(() => {
        toast.success('sing-out succesful.');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  // navlinks
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-white'}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allmodels"
          className={({ isActive }) =>
            `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-white'}`
          }
        >
          All Models
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addmodel"
              className={({ isActive }) =>
                `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-white'}`
              }
            >
              Add Model
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* links */}
            {links}
          </ul>
        </div>
        <Link to="/" className="font-extrabold text-xl">
          AI Model Manager
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* links */}
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <div className="relative flex flex-col items-center mr-3.5 group">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-[#9F62F2] group-hover:scale-105 transition-transform duration-200"
                    src={user?.photoURL}
                    alt="Profile Picture"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content gap-y-1.5 menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm"
                >
                  <li className="text-[#ffffff] text-lg font-semibold">
                    {user?.displayName}
                  </li>
                  <li className="text-[#ffffff] font-semibold mb-2">
                    {user?.email}
                  </li>

                  <li>
                    <Link
                      to="/mymodels"
                      className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
                    >
                      My Ai Model
                    </Link>
                  </li>
                  <li>
                    <Link
                      // to="/mymodels"
                      className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
                    >
                      Model Purchase
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={handleSingOut}
                      className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
                    >
                      LogOut
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* {user ? (
          <a
            onClick={handleSingOut}
            className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
          >
            LogOut
          </a>
        ) : (
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
          >
            Login
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
