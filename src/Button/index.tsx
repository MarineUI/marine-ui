import React from 'react';

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return <button type="button">{text}</button>;
};

export default Button;
