import './App.css';
import { useEffect, useState } from 'react';

const App = ({firstName}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.agify.io?name=${firstName}`)
    .then(response => response.json())
    .then(setData);
  }, [firstName]);
   
  return data ? <p>{JSON.stringify(data)}</p> : <p>No data on {firstName}</p>;
};

export default App;