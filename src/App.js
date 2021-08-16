import './App.css';
import { useEffect, useState } from 'react';

const App = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.agify.io?name=${props.firstName}`)
    .then(response => response.json())
    .then(setData);
  }, [props.firstName]);

  const [gitHubData, setGitHubData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}`)
    .then(response => response.json())
    .then(setGitHubData);
  }, [props.username]);
   
  return(
    <>
      <p>{data 
        ? JSON.stringify(data) : `No data on ${props.firstName}`}</p>
      <p>{gitHubData ? JSON.stringify(gitHubData) : `No data on ${props.username}`}</p>
    </>
  )};

export default App;