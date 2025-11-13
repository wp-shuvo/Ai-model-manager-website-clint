import React, { use } from 'react';
import GoogleLogo from '../../assets/icon-google.png';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Register = () => {
  const {
    createUser,
    singInWithGoogle,
    errorInvalid,
    setErrorInvalid,
    setUser,
  } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //login with google
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

  // Register
  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoURL = event.target.photoURL.value;
    const password = event.target.password.value;

    console.log(name, photoURL);

    if (password.length < 6) {
      setErrorInvalid('Password at least 6 carecter');
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!passwordRegex.test(password)) {
      setErrorInvalid(
        'Password at least one Upparcase Letter , one LowerCase Letter '
      );
      return;
    }

    createUser(email, password)
      .then(result => {
        setErrorInvalid('');
        toast.success('✅ Account created successfully!');
        setUser({
          ...result.user,
          displayName: name,
          photoURL: photoURL,
        });
        event.target.reset();
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
        toast.error('email already in use');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-300 ">
        <div className="text-center mb-6">
          <div className="text-4xl text-indigo-600 mb-2">🤖</div>
          <h2 className="text-2xl font-bold text-gray-900">
            Register for{' '}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              AI Model Manager
            </span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Access your inventory of models
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name*/}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="user@gmail.com"
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              name="photoURL"
              type="text"
              required
              placeholder="Your Photo URL"
              className="block w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="block w-full text-gray-700 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Register */}
          <div>
            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
            >
              Register
            </button>
          </div>
        </form>
        <h1 className="my-2 text-red-600 text-sm text-center">
          {errorInvalid}{' '}
        </h1>
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
          Already have a Account? Please{' '}
          <Link
            to="/login"
            className="font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
