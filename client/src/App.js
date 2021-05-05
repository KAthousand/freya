import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './screens/About/About';
import Home from './screens/Home/Home';
import Information from './screens/Information/Information';
import Menu from './screens/Menu/Menu';
import Layout from './screens/shared/Layout/Layout';


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/menu'>
            <Menu />
          </Route>
          <Route exact path='/information'>
            <Information />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
