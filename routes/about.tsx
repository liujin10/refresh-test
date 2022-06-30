/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "hello");
    return resp;
  },
};
export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>这是abount页面</p>
    </main>
  );
}
