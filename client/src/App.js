import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import NavBar from './Navbar';
import EncabulatorList from './EncabulatorList';
import Home from './Home';
import Encabulator from './Encabulator';


function App() {
  const [user, setUser] = useState(null)
  const [encabulators, setEncabulators] = useState([])
  useEffect(() => { 
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then ((user)=>setUser(user))
      }
    })
  }, [])
  
  useEffect(() => {
      fetch('/encabulators')
      .then((r) => r.json())
      .then((item) => setEncabulators(item))
  }, [user])

  if (!user) return <Login setUser={setUser} />
  if(!encabulators) return <h2>Loading</h2>

  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Switch>
        <Route exact path = "/">
          <Home user={user} />
        </Route>
        <Route exact path = "/encabulator-list">
          <EncabulatorList encabulators={encabulators} setEncabulators={setEncabulators}/>
        </Route>
        <Route path = "/encabulator-list/:id">
          <Encabulator encabulators={encabulators} setEncabulators={setEncabulators} user={user}/>
        </Route>
        <Route path="/encabulator-form">          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
