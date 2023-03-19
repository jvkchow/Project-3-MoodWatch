import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { PhoneScreen } from '../components/PhoneScreen';
import { UserContext } from '../contexts/UserContext';
import { generateMultiDayEmotionValues } from '../util/emotion';

export const Login = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('weeklyMood', JSON.stringify(generateMultiDayEmotionValues(7, 3)));
    navigate('/home');
  };

  return (
    <PhoneScreen>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type='email'
            value={userInfo.email}
            onChange={(event) =>
              setUserInfo((prev) => {
                return { ...prev, email: event.target.value };
              })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            value={userInfo.password}
            onChange={(event) =>
              setUserInfo((prev) => {
                return { ...prev, password: event.target.value };
              })
            }
          />
        </label>
        <br />
        <button type='submit'>Login</button>
      </form>
    </PhoneScreen>
  );
};
