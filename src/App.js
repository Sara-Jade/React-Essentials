import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Events, Contact, Oops, Services, History, Location } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}>
        <Route path='services' element={<Services />}></Route>
        <Route path='history' element={<History />}></Route>
        <Route path='location' element={<Location />}></Route>
      </Route>
      <Route path='/events' element={<Events />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<Oops />}></Route>
    </Routes>
  )
};

export default App;