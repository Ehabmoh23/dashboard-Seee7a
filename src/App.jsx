import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Register from './pages/Register';
import Hotels from './pages/Hotels';
import Restaurants from './pages/Restaurants';
import Activities from './pages/Activities';
import CarRental from './pages/CarRental';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import Loginn from './pages/Loginn';
import User from './pages/User';






function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Loginn />} />
        <Route path="/" element={<Layout />}>
        <Route path="users" element={<User />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="activities" element={<Activities />} />
          <Route path="car-rental" element={<CarRental />} />
          <Route path="events" element={<Events />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;


