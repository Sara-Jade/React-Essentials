import './App.css';
import logo from './logo.svg';

const Header = (props) => {
  return (
    <>
    <h1>{props.name}'s Atomic Kitchen</h1>
    <h2>Dessert is a nuclear experience!</h2>
    </>
  );
}

const Main = () => {
  return (
    <section>
      <img src={logo} alt="React logo"/>
    </section>
  );
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.year}</p>
      <p>About the scientist chef</p>
    </footer>
  )
}

const menuItems = [
  'NDT chocolate mousse',
  'Peanut butter and chocolate chip fusion cookies',
  'Curie\'s creamy frosted cupcakes'
];

const menuItemsObj = menuItems.map((menuItem, index) => ({id: index, title: menuItem}));

const Menu = () => {
  return (
    <>
    <h3>Menu</h3>
    <ul style={{textAlign: 'left'}}>
      {menuItemsObj.map((menuItem) => <li key={menuItem.id}>{menuItem.title}</li>)}
    </ul>
    </>
  );
}

const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="App">
     <Header name = 'Tara'/>
     <Main />
     <Menu />
     <Footer year={year}/>
    </div>
  );
}

export default App;
