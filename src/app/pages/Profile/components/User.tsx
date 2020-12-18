// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';

interface UserProps {
  username: string;
  email: string;
}

const User: FC<UserProps> = ({ username, email }) => (
  <div className="user-profile">
    <div className="user-top">
      <div className="user-title">Dashboard</div>
      <div className="user-icons">
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  </div>
);

export default User;
