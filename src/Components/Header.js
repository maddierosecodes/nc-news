import { Link } from 'react-router-dom';
const Header = ({categories, latest, setFilter, currentUser}) => {
  return (
    <div className="header">
      <p>Header</p>
      <nav>
        <Link to={`/articles/1`}>Articles link</Link>
        <br></br>
        <Link to={`/profile/username`}>Profile link</Link>
        <br></br>
        <Link to={`/post`}>Post link</Link>
        <br></br>
        <Link to={`/`}>Main link</Link>
      </nav>
    </div>
  );
};

export default Header;
