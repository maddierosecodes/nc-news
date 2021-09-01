import SignIn from './SignIn';
import SignUp from './SignUp';
import OtherProfile from './OtherProfile';
import MyProfile from './MyProfile';
import { ContainerContext } from './Container';
import { useContext, useEffect } from 'react';

const Profile = () => {

  const { showTabs, switchShowTabs } = useContext(ContainerContext);
 useEffect(() => {
   if (showTabs === 'hide') switchShowTabs(showTabs);
 }, [showTabs, switchShowTabs]);
  return (
    <div className="profile">
      <p>Profile</p>
      <MyProfile />
      <OtherProfile />
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Profile;
