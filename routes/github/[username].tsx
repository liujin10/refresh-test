/**@jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const { username } = ctx.params;
    // const resp = ctx.render();
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const user: User = await res.json();
    return ctx.render(user);
  },
};

export default function Page(query: PageProps<User | null>) {
  const { data, params } = query;
  console.log(data);
  if (data) {
    return (
      <main>
        <img src={data.avatar_url} width={64} height={64} />
        <h1>{data.name}</h1>
        <p>{data.login}</p>
      </main>
    );
  }
  return <main>user{params.username}不存在</main>;
}
