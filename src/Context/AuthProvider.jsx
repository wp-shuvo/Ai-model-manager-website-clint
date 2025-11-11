import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ Children }) => {
  const authinfo = {};
  return <AuthContext value={authinfo}>{Children}</AuthContext>;
};

export default AuthProvider;
