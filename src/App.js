import './App.css';
import { useReducer } from 'react';

const App = () => {
  const [isChecked, toggle] = useReducer(
    isChecked => !isChecked,
    true);

  return (
    <>
      <input 
        type='checkbox'
        defaultChecked={isChecked}
        onChange={toggle}
       />
       <p>{isChecked ? 'I\'m checked!' : 'I\'m not checked!'}</p>
    </>);
};

export default App;