import './App.css';
import NavBar from  './components/NavBar';
import SlidePhoto from './components/SlidePhoto';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="container">
      <NavBar />
      <SlidePhoto />
      <ItemListContainer />
    </div>
  );
}

export default App;
