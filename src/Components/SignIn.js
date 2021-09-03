import { UserContext } from './User';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [submit, setSubmit] = useState('grumpy19');
  const [clicked, setClicked] = useState(false);

  const { currentUser, switchCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (clicked) {
      axios
        .get(`https://nc-news-maddie.herokuapp.com/api/users/${submit}`)
        .then((res) => {
          switchCurrentUser(res.data.user[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [clicked]);

  return (
    <div className="signIn">
      <p>Sign In</p>
      <label>
        Username:
        <input
          className="signIn__usernameInput"
          type="text"
          value="grumpy19"
          onChange={(event) => setSubmit(event.target.value)}
        />
      </label>
      <button
        onClick={() => {
          setClicked(true);
        }}
        className="signIn__signInButton">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
