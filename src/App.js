import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from './components/Index/Index';
import ItemDetail from './components/ItemListContainer/ItemDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/vehiculos/:categoria' component={ItemListContainer} />
          <Route exact path='/detalle/:detalleID' component={ItemDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
