import React, { useEffect } from 'react';
import axios from 'axios';

const Code = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert('Verification code copied to clipboard!');
  };

  const sendCodeToBackend = async () => {
    try {
      const response = await axios.post("http://localhost:4001/code/codeing", { code });
      console.log('Verification code sent to backend:', response.data);
    } catch (error) {
      console.error('Error sending verification code to backend:', error);
    }
  };

  useEffect(() => {
    sendCodeToBackend();
  }, [code]);

  return (
    <div className="ml-7">
      <h1>Your Verification Code</h1>
      <h3 className="pl-9 pr-9 btn btn-outline btn-success">{code}</h3>
      <button onClick={copyToClipboard} className="ml-9 btn btn-outline btn-primary mt-2">
        Copy Code
      </button>
    </div>
  );
};

export default Code;
