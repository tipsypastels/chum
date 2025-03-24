import { Handlers } from "$fresh/server.ts";
import { CHAT_SERVER } from "../library/chat.ts";

export const handler: Handlers = {
  async POST(req) {
    const { username } = await req.json();

    if (!username) {
      throw new Error("TODO");
    }

    const token = CHAT_SERVER.signIn(username);

    return new Response(token, {
      status: 200,
    });
  },
};
