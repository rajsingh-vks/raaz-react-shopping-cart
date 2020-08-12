import React, { Component } from 'react'

import store from './store/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import AdminScreen from './components/screens/AdminScreen';

export class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="grid-container">
          <header>
            <Link to="/">Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            <Route path='/admin' component={AdminScreen}/>
            <Route path='/' component={HomeScreen} exact/>
          </main>
          <footer>All right is reserved.</footer>
        </div>
    </BrowserRouter>
    </Provider>
  );
 }
}

export default App;

