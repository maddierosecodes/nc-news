import SignIn from './SignIn';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import MyProfile from './UserProfile';
import { ContainerContext } from './Container';
import { useContext, useEffect } from 'react';

const Profile = ({ articles, setCurrentArticle }) => {
  const { showTabs, switchShowTabs } = useContext(ContainerContext);

  useEffect(() => {
    if (showTabs === 'hide') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);

  return (
    <div className="profile">
      <p>Profile</p>
      <UserProfile articles={articles} setCurrentArticle={setCurrentArticle} />
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Profile;
