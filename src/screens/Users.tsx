import { Component, For, createSignal, onMount } from 'solid-js';

import UserCard from '../components/UserCard';

const url = 'https://api.github.com/users';

interface IUserData {
  login: string;
  avatar_url: string;
}

const fetchGHUsers = async () => {
  const query = `?per_page=10&page=1&q=${encodeURIComponent(`type:user`)}`;
  const results = await fetch(url + query);
  return results.json();
};

const Users: Component = () => {
  const [users, setUsers] = createSignal<IUserData[]>([]);

  onMount(async () => {
    const results = await fetchGHUsers();
    setUsers(results);
  });

  return (
    <main class="flex flex-col h-screen bg-black py-5 px-8">
      <h1 class="text-xl text-gray-100 self-center mb-4">
        This is the Users screen
      </h1>
      <section class="grid grid-cols-5 gap-x-5 gap-y-6">
        <For each={users()} fallback={<h3>Loading...</h3>}>
          {(item) => (
            <UserCard avatar_url={item.avatar_url} login={item.login} />
          )}
        </For>
      </section>
    </main>
  );
};

export default Users;
