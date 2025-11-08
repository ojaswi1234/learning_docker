import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [message, setmessage] = useState(0);

   useEffect(() => {
    fetch(
      'https://5001-firebase-learning-docker-1762351433836.cluster-edb2jv34dnhjisxuq5m7l37ccy.cloudworkstations.dev/api/message'
    )
      .then((res) => res.json())
      .then((data) => setmessage(data.message))
      .catch((error) => console.error(error));
  }, []);  
  return (
    <>
      <div>
        <h1>Hello this is client side </h1>
        <p> This my message to you: {message} </p>
      </div>
    </>
  );
}

export default App;