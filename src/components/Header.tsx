import type { Component } from 'solid-js';
import { NavLink, Link } from 'solid-app-router';

import solidLogo from '../assets/logo.svg';

const Header: Component = () => (
  <header class="bg-slate-600 grid grid-cols-3 h-16">
    <Link href="/home" class="flex ml-4 items-center">
      <h3 class="text-2xl text-gray-200 p-3">SolidJS Test Drive</h3>
      <img src={solidLogo} alt="logo" width={24} height={24} />
    </Link>

    <nav class="justify-self-center self-center h-fit">
      <NavLink
        href="/home"
        class="h-8"
        inactiveClass="text-slate-100"
        activeClass="text-slate-400"
      >
        Home
      </NavLink>
      <NavLink
        href="/users"
        class="mx-10 h-8"
        inactiveClass="text-slate-100"
        activeClass="text-slate-400"
      >
        Users
      </NavLink>
      <NavLink
        href="/about"
        class="h-8"
        inactiveClass="text-slate-100"
        activeClass="text-slate-400"
      >
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;
