import React from 'react';
import { PhoneScreen } from '../components/PhoneScreen';
import { PrimaryButton } from '../components/PrimaryButton';
import { Link } from 'react-router-dom';

const centerStyle = { display: 'flex', justifyContent: 'center' };

export const GettingStartedPage = () => (
  <PhoneScreen>
    <div style={{ ...centerStyle, flexDirection: 'column', alignItems: 'center' }}>
      <h1>Welcome to Moodwatch</h1>
      <img src='logo.jpg' style={{ width: '250px' }} alt='logo' />
    </div>
    <div style={{ ...centerStyle, gap: '50px' }}>
      <Link to='/login'>
        <PrimaryButton label='Log In' style={{ padding: '18px 36px' }} />
      </Link>
      <Link to='/register'>
        <PrimaryButton label='Register' style={{ padding: '18px 36px' }} />
      </Link>
    </div>
  </PhoneScreen>
);
