import SignIn from './SignIn';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import MyProfile from './UserProfile';
import { ContainerContext } from './Container';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './User';

const Profile = ({ articles, setCurrentArticle, currentFilter }) => {
  const { showTabs, switchShowTabs } = useContext(ContainerContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [account, setAccount] = useState({
    signIn: 'true',
    signUp: 'true'
  });

  useEffect(() => {
    if (showTabs === 'hide') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);

  if (currentUser.username === 'none') {
    return (
      <div className="userLogin">
        <p>HI</p>
        {account.signIn ? <SignIn /> : null}
        {account.signUp ? <SignUp /> : null}
      </div>
    );
  } else
    return (
      <div className="profile">
        <UserProfile
          articles={articles}
          setCurrentArticle={setCurrentArticle}
          currentFilter={currentFilter}
        />
      </div>
    );
};

export default Profile;
