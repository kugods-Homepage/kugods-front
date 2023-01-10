import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MainPage from './MainPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default RoutesComponent;
