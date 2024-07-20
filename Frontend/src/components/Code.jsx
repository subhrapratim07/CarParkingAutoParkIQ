// import React, { useState } from 'react';

// const generateRandomTenCharacterString = () => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < 10; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters[randomIndex];
//   }
//   return result;
// };

// const Code = () => {
//   const [code] = useState(generateRandomTenCharacterString());

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code);
//     alert('Verification code copied to clipboard!');
//   };

//   return (
//     <div className="ml-8">
//       <h1>Your Verification Code</h1>
//       <p className="btn btn-outline btn-primary">{code}</p>
//       <button onClick={copyToClipboard} className="btn btn-outline btn-primary mt-2">
//         Copy Code
//       </button>
//     </div>
//   );
// };

// export default Code;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const generateRandomTenCharacterString = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

const Code = () => {
  const [code, setCode] = useState(generateRandomTenCharacterString());

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
  }, [code]); // Send code to backend when the code is generated

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

