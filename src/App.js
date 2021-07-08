import './App.css';
import NavBar from  './components/NavBar';
import SlidePhoto from './components/SlidePhoto';
import ItemListContainer from './components/ItemListContainer'

const greetings = [ {"greeting":"Buen dia"},
                    {"greeting":"Buen Tardes"},
                    {"greeting":"Buen Noches"},
                    {"greeting":"Bienvenidos"},
                    {"greeting":"Hasta pronto"},
                    {"greeting":"Goodbye"}
                  ];

function App() {
  return (
    <div className="container">
        <NavBar />
        <SlidePhoto />
        <ItemListContainer greetings={greetings}/>
    </div>
  );
}

export default App;
