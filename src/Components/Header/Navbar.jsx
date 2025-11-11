import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const { user } = use(AuthContext);

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
              // to="/addmodels
              className={({ isActive }) =>
                `font-semibold ${isActive ? 'text-white' : 'text-[#9F62F2]'}`
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
        <a className="font-extrabold text-xl">AI Model Manager</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* links */}
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <div className="relative flex flex-col items-center mr-3.5 group">
          {user && (
            <>
              <img
                className="h-10 w-10 rounded-full border-2 border-[#9F62F2] group-hover:scale-105 transition-transform duration-200"
                src={user?.photoURL}
                alt="Profile Picture"
              />
            </>
          )}
        </div>
        {user ? (
          <a
            // onClick={handleSingOut}
            className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
          >
            LogOut
          </a>
        ) : (
          <Link
            // to="/login"
            className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
