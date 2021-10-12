import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const url = "/api/message?test";
      const response = await fetch(`/api/message?test`);
      const text = response.json();
      setData(text);
    })();
  });

  return <div>Welcome to the home page {data}</div>;
}

export default App;