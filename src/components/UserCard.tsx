import type { Component } from 'solid-js';

interface IUserCardProps {
  login: string;
  avatar_url: string;
}

const UserCard: Component<IUserCardProps> = (props) => {
  return (
    <article class="bg-slate-600 p-2 rounded-xl w-fit">
      <img src={props.avatar_url} class="h-80 rounded-t-md" />
      <span class="text-slate-200">{props.login}</span>
    </article>
  );
};

export default UserCard;
