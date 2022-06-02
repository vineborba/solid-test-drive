import type { Component } from 'solid-js';
import { Routes, Route, Navigate } from 'solid-app-router';

import Users from './screens/Users';
import About from './screens/Abouts';
import Home from './screens/Home';
import Header from './components/Header';

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate href="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
