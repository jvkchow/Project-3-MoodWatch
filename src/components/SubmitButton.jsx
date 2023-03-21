import React from 'react';
const buttonStyle = {
  backgroundColor: '#FFCB63',
  border: 'none',
  borderRadius: '4px',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontSize: '25px',
  padding: '20px 44px',
  margin: '10px',
  fontWeight: 'bold'
};

export const SubmitButton = ({ label, onClick, style, type }) => (
  <button type={type} style={{ ...buttonStyle, ...style }} onClick={onClick}>
    {label}
  </button>
);