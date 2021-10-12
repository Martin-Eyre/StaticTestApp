import React, { useState, useEffect } from 'react';

function App() {
  const [responseMessage, setResponseMessage] = useState('');


  useEffect(() => {
    (async function () {
      const url = "/api/message?test";
      const response = await fetch(url);
      const data = await response.json();
      setResponseMessage(data.message);
      console.log(data);
    })();
  });

  return <div>Welcome to the home page {responseMessage}</div>;
}

export default App;