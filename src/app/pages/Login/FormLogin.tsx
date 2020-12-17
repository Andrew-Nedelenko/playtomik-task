// eslint-disable-next-line no-use-before-define
import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../store/actions/actions';
import { emailPattern } from '../../utils/paterns';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setErrors('');
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSumbit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (email === '' || password === '') {
      return setErrors('Fill the gaps');
    }
    if (!emailPattern.test(email)) {
      return setErrors('Invalid email');
    }
    return dispatch(getAccessToken(email, password));
  };

  return (
    <div className="login-form-component">
      <div className="login-form-wrap">
        <form onSubmit={handleSumbit} noValidate>
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
