import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [emotion, setEmotion] = useState('excitement');
  const [emotion2, setEmotion2] = useState('goofyness');
  useEffect(() => console.log(`It's ${emotion} around here!`), [emotion]);
  useEffect(() => console.log(`It's ${emotion2} around here!`), [emotion2]);

  return (
    <>
      <h1>The feeling emoted is {emotion}.</h1>
      <button onClick={() => setEmotion('envy')}>Envious</button>
      <button onClick={() => setEmotion2('lethargy')}>Sleepy</button>
      <button onClick={() => setEmotion('happiness')}>Happy</button>
      <button onClick={() => setEmotion2('sadness')}>Sad</button>
    </>);
};

export default App;