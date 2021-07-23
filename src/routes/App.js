// import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import '../assets/styles/App.css';
// import NavBar from  '../components/NavBar';
import Home from  '../components/Home';
import Layout from  '../components/Layout';
import NotFound from  '../components/NotFound';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ItemListContainer} />
            <Route exact path="/category/:id" component={ItemListContainer} />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App;
