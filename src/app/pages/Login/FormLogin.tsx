// eslint-disable-next-line no-use-before-define
import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccessToken } from '../../store/actions/main-actions';
import { emailPattern } from '../../utils/paterns';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [redirectProfile, setRedirectProfile] = useState(false);
  const dispatch = useDispatch();

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setErrors('');
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setErrors('');
    setPassword(e.currentTarget.value);
  };

  const handleSumbit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (email === '' || password === '') {
      return setErrors('Fill the gaps');
    }
    if (!emailPattern.test(email)) {
      return setErrors('Invalid email');
    }
    await new Promise((res) => {
      res(dispatch(getAccessToken(email, password)));
    }).then(() => {
      setRedirectProfile(true);
    }).catch((err) => { setErrors(err); });
    return false;
  };

  if (redirectProfile) {
    return <Redirect to="/profile" />;
  }

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
