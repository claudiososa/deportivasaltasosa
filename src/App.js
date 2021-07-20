import './App.css';
import NavBar from  './components/NavBar';
import SlidePhoto from './components/SlidePhoto';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

// const greetings = [ {"greeting":"Buen dia"},
//                     {"greeting":"Buen Tardes"},
//                     {"greeting":"Buen Noches"},
//                     {"greeting":"Bienvenidos"},
//                     {"greeting":"Hasta pronto"},
//                     {"greeting":"Goodbye"}
//                   ];

// const products = [
//   {id:1,name:'remera',stock:3},
//   {id:2,name:'zapatilla',stock:2},
//   {id:3,name:'pantalon',stock:10},
//   {id:4,name:'camisa',stock:5},
//   {id:5,name:'corbata',stock:6},
// ];

function App() {
  return (
    <div className="container">
        <NavBar />
        <SlidePhoto />
        <ItemListContainer
          // greetings={greetings}
          // products={products}
        />
        <ItemDetailContainer />
    </div>
  );
}

export default App;
