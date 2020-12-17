// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div className="login-form-component">
      <div className="login-form-wrap">
        <form>
          <p>Sing In</p>
          <label htmlFor="email">
            Email
            <input type="email" value={email} onChange={handleEmail} />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" value={password} onChange={handlePassword} />
          </label>
          <label htmlFor="sumbit">
            <input type="submit" name="sumbit" value="Sign In" />
          </label>
          <div className="errors">{errors}</div>
        </form>
      </div>
    </div>
  );
};
