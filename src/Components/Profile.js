import SignIn from './SignIn';
import SignUp from './SignUp';
import OtherProfile from './OtherProfile';
import MyProfile from './MyProfile';

const Profile = () => {
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
