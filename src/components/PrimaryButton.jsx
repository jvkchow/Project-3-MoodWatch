import React from 'react';
const buttonStyle = {
  backgroundColor: '#FFCB63',
  border: 'none',
  borderRadius: '4px',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontSize: '16px',
  padding: '12px 24px',
  margin: '10px',
};

export const PrimaryButton = ({ label, onClick, style, type }) => (
  <button type={type} style={{ ...buttonStyle, ...style }} onClick={onClick}>
    {label}
  </button>
);
