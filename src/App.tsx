import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Products from './ProjectTwo';
import UserInfo from './ProjectOne/UserInfo';
import FamilyMembers from './ProjectOne/AddFamily';
import ActiveForm from './ProjectOne/ActiveForm';
import Details from './ProjectOne/Details';
import {
  UserStateContext,
  defaultContextValue,
  UserContext,
} from './ProjectOne/context';
import './App.css';

function App() {
  const [value, setValue] = useState<UserContext>(defaultContextValue);

  return (
    <div className="App">
      <UserStateContext.Provider value={{ ...value, setValue: setValue }}>
        <Router>
          <ul className="menu">
            <li>
              <Link to="/">Project One</Link>
            </li>
            <li>
              <Link to="/products">Project Two</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Navigate to="/users/step-one" />} />

            <Route path="/users" element={<ActiveForm />}>
              <Route path="step-one" element={<UserInfo />} />
              <Route path="step-two" element={<FamilyMembers />} />
              <Route path="step-three" element={<Details />} />
            </Route>
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </UserStateContext.Provider>
    </div>
  );
}

export default App;
