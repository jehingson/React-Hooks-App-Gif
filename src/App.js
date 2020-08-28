import React from 'react'
import Home from './pages/Home'
import './App.css'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import {Route, Link} from 'wouter'
import StaticContext from './Context/StaticContext'

function App() {

  return (
    <StaticContext.Provider value={{
      name: 'Provider',
      booleano: true
    }}>
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
          component={SearchResults} 
          />   
        <Route 
          component={Detail}
          path="/gif/:id"
        />     
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
