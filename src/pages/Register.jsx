import { useNavigate } from 'react-router-dom';
import { PhoneScreen } from '../components/PhoneScreen';
import { PrimaryButton } from '../components/PrimaryButton';

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    return navigate('/login');
  };

  return (
    <PhoneScreen>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' />
        </label>
        <br />
        <label>
          Email:
          <input type='email' />
        </label>
        <br />
        <label>
          Password:
          <input type='password' />
        </label>
        <br />
        <label>
          Age:
          <input type='number' min={0} />
        </label>
        <br />
        <PrimaryButton type='submit' label='Sign Up' />
      </form>
    </PhoneScreen>
  );
};
