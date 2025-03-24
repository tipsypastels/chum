import { Handlers } from "$fresh/server.ts";
import { CHAT_SERVER } from "../library/chat.ts";

export const handler: Handlers = {
  GET(req) {
    const reqUrl = new URL(req.url);
    const token = reqUrl.searchParams.get("token");
    if (!token) {
      return new Response("400 Bad Request", {
        status: 400,
      });
    }

    return CHAT_SERVER.connect(req, token);
  },
};
