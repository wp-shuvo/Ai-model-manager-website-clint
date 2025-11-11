import React, { use } from 'react';
import GoogleLogo from '../../assets/icon-google.png';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const { singInuser, singInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // login wiht email&pass
  const handleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);

    singInuser(email, password)
      .then(result => {
        console.log(result.user);
        event.target.reset();
        toast.success('✅ login successfully!');
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then(result => {
        toast('✅ login successfully!');
        console.log(result.user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-300 ">
        <div className="text-center mb-6">
          <div className="text-4xl text-indigo-600 mb-2">🤖</div>
          <h2 className="text-2xl font-bold text-gray-900">
            Sign in to{' '}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              AI Model Manager
            </span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Access your inventory of models
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email*/}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="user@example.com"
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="block w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Forgot Password*/}
          <div c>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          {/* login */}
          <div>
            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="flex items-center my-5">
          <hr className="border-gray-300 w-[45%]" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="border-gray-300 w-[45%]" />
        </div>

        {/* google login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <img src={GoogleLogo} alt="google" className="w-5 h-5" />
          <span className="text-gray-700 font-medium">Sign In With Google</span>
        </button>

        {/* Footer Link */}
        <p className="mt-6 text-center text-sm font-semibold text-gray-600">
          New to Our Website? Please{' '}
          <Link
            to="/register"
            className="font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
