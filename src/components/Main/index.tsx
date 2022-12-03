import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      This is Main Page.
      <div>
        <Link to={'/signIn'}>Sign In</Link>
      </div>
    </div>
  );
};

export default MainPage;
