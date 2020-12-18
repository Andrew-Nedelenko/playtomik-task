// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../../layout/Loading';
import { getUserDataAction } from '../../store/actions/main-actions';
import { RootState } from '../../store/reducers';
import User from './components/User';

const Profile = () => {
  const dispatch = useDispatch();
  const { accessToken, currentUser } = useSelector((state: RootState) => state.mainReducer);

  if (!accessToken) {
    return <Redirect to="login" />;
  }

  useEffect(() => {
    dispatch(getUserDataAction(accessToken));
  }, [accessToken]);

  if (!currentUser) {
    return <Loading />;
  }

  return (
    <div className="profile-compoent">
      <User username={currentUser?.username} email={currentUser?.email} />
    </div>
  );
};

export default Profile;
