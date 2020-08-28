import React from 'react'
import ListGif from './components/ListGif'
import Home from './pages/Home'
import './App.css'
import {Route, Link} from 'wouter'


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/">
          Logo
        </Link>
        <Route 
        component={Home}
        path="/"
        />
        <Route 
          path="/search/:keyword" 
          component={ListGif} 
          />        
      </section>
    </div>
  );
}

export default App;
