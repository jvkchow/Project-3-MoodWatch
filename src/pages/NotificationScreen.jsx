import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const screenStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#2E2E2E',
  borderRadius: '20px',
  padding: '20px',
  margin: '20px 40px',
  width: '450px',
  height: '900px',
  gap: '25px',
};

const notificationStyle = {
  display: 'flex',
  backgroundColor: '#EEEEEE',
  alignItems: 'center',
  padding: '10px',
  width: 'auto',
  height: '50px',
  borderRadius: '5px',
  gap: '10px',
  cursor: 'pointer',
};

export const NotificationScreen = () => {
  const navigate = useNavigate();
  const [isNotifVisible, setIsNotifVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsNotifVisible(true);
    }, 2500);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div style={screenStyle}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <code style={{ fontSize: '42px', color: 'white' }}>2:30 PM</code>
      </div>
      {isNotifVisible ? (
        <div style={notificationStyle} onClick={() => navigate('/start')}>
          <img src='logo.jpg' height={40} alt='notification' />
          <h4>It's time for another mood rating!</h4>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
