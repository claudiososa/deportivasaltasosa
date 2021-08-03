import { BrowserRouter, Route, Switch} from "react-router-dom";
import '../assets/styles/App.css';
import Home from  '../components/Home';
import Layout from  '../components/Layout';
import NotFound from  '../components/NotFound';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import CartContext from '../context/CartContext';
import Provider from '../context/Provider';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Provider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ItemListContainer} />
              <Route exact path="/category/:id" component={ItemListContainer} />
              <Route exact path="/item/:id" component={ItemDetailContainer} />
              <Route exact path="/cart" component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
