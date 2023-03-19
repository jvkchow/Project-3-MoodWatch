const screenStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#eeeeee',
  border: '2px solid #2E2E2E',
  borderRadius: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  margin: '20px',
  width: '450px',
  height: '900px',
};

export const PhoneScreen = ({ children }) => {
  return <div style={screenStyle}>{children}</div>;
};
