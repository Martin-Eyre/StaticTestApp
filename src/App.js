import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message?test`)).json();
      setData(text);
    })();
  });

  return <div>Welcome to the home page {data}</div>;
}

export default App;