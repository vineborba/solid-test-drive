import type { Component } from 'solid-js';

import solidLogo from '../assets/logo.svg';

const About: Component = () => {
  return (
    <main class="flex flex-col items-center bg-black h-screen py-5">
      <h1 class="text-xl text-gray-100">This is the About screen</h1>
      <section class=" mt-10">
        <span class="text-gray-50">
          Built with{' '}
          <a
            href="https://www.solidjs.com/"
            target="_blank"
            class="text-blue-800"
          >
            Solid JS
          </a>{' '}
          framework
        </span>
      </section>
      <img src={solidLogo} alt="logo" width={204} height={204} />
    </main>
  );
};

export default About;
