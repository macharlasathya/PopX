
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout'; 
import Home from './pages/Home';
import Login from './pages/AlreadyRegister';
import CreateAccount from './pages/CreateAccount';
import AlreadyRegister from './pages/AlreadyRegister';
import AccountSetting from './pages/AccountSetting';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="already-register" element={<AlreadyRegister />} />
          <Route path="account-setting" element={<AccountSetting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;