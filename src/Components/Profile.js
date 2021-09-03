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
    signIn: false,
    signUp: false
  });

  useEffect(() => {
    if (showTabs === 'hide') switchShowTabs(showTabs);
  }, [showTabs, switchShowTabs]);

  if (currentUser.username === 'none') {
    return (
      <div className="userLogin">
        <p>Please login or create an account!</p>
        {account.signIn ? (
          <SignIn />
        ) : (
          <button
            onClick={() => {
              setAccount({ signIn: true, signUp: false });
            }}>
            Sign In
          </button>
        )}
        {account.signUp ? (
          <SignUp />
        ) : (
          <button
            onClick={() => {
              setAccount({ signIn: false, signUp: true });
            }}>
            Sign Up
          </button>
        )}
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
