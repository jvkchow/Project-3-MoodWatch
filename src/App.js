import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { GettingStartedPage } from './pages/GetStarted';
import { UserContextProvider } from './contexts/UserContext';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { NotificationScreen } from './pages/NotificationScreen';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<NotificationScreen />} />
          <Route exact path='/start' element={<GettingStartedPage />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
