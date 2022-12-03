import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/Main';
import SignInPage from './components/signIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
