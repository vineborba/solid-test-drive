import type { Component } from 'solid-js';
import { Routes, Route, Link } from 'solid-app-router';

const Users: Component = () => {
  return (
    <main>
      <h1>this is the "Users" route</h1>
    </main>
  );
};

const Home: Component = () => {
  return (
    <main>
      <h1>this is the "Home" route</h1>
    </main>
  );
};

const Profile: Component = () => {
  return (
    <main>
      <h1>this is the "Profile" route</h1>
    </main>
  );
};

const App: Component = () => {
  return (
    <>
      <header class="bg-slate-600 grid grid-cols-3 h-16">
        <h1 class="text-2xl text-gray-200 p-3">SolidJS test drive</h1>

        <div class="justify-self-center">
          <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
