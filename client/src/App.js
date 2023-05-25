import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => { 
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then ((user)=>setUser(user))
      }
    })
  }, [])

  if (!user) return <Login setUser={setUser} />

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route path = "/">
        </Route>
        <Route path = "/encabulators">
        </Route>
        <Route path="/encabulators/:id">          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
