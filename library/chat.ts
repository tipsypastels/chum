export const CHAT_SERVER = (() => {
  const socketsByToken = new Map<string, WebSocket>();
  const usernamesByToken = new Map<string, string>();

  return {
    signIn(username: string) {
      const token = crypto.randomUUID();
      usernamesByToken.set(token, username);
      return token;
    },

    connect(req: Request, token: string) {
      const { socket, response } = Deno.upgradeWebSocket(req);

      socket.onopen = () => {
        setInterval(() => {
          socket.send(JSON.stringify({ hello: "world" }));
        }, 10000);
      };

      socketsByToken.set(token, socket);

      return response;
    },
  };
})();
