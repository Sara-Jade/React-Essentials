import './App.css';
import { useEffect, useState } from 'react';

const App = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.agify.io?name=${props.firstName}`)
    .then(response => response.json())
    .then(setData)
    .then(setLoading(false))
    .catch(error => setError(error));
  }, [props.firstName]);

  const [gitHubData, setGitHubData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}`)
    .then(response => response.json())
    .then(setGitHubData);
  }, [props.username]);
  
  if (isLoading) return <p>{props.firstName} data is loading.</p>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (!data) return <p>Sorry! We don't have data on ${props.firstName}</p>

  return(
    <>
      <p>{data 
        ? JSON.stringify(data) : `No data on ${props.firstName}`}</p>
      <p>{gitHubData ? JSON.stringify(gitHubData) : `No data on ${props.username}`}</p>
    </>
  )};

export default App;