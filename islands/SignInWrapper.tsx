import { ComponentChildren } from "preact";
import { useSignal } from "@preact/signals";
import { Dispatch, useContext } from "preact/hooks";
import { ClientAction, ClientState } from "./ClientStateProvider.tsx";

export interface SignInWrapperProps {
  children: ComponentChildren;
}

export default function SignInWrapper(props: SignInWrapperProps) {
  const [state, dispatch] = useContext(ClientState);
  return state.user
    ? <>{props.children}</>
    : <Inner state={state} dispatch={dispatch} />;
}

interface InnerProps {
  state: ClientState;
  dispatch: Dispatch<ClientAction>;
}

function Inner({ dispatch }: InnerProps) {
  const usernameInput = useSignal("");

  async function onSubmit(e: Event) {
    e.preventDefault();

    const username = usernameInput.value;
    const res = await fetch("/auth", {
      method: "POST",
      body: JSON.stringify({ username }),
    });

    if (!res.ok) {
      console.error("Sign in failed.");
    }

    const token = await res.text();

    const wsUrl = new URL(`./ws?token=${token}`, location.origin);
    wsUrl.protocol = wsUrl.protocol.replace("http", "ws");
    const ws = new WebSocket(wsUrl);

    ws.onmessage = (e) => {
      console.log(e.data);
    };

    dispatch({ type: "sign-in", user: { username, token, ws } });
  }

  return (
    <form class="grow flex flex-col p-4" onSubmit={onSubmit}>
      <label class="grow block">
        <div class="font-bold">
          Username
        </div>

        <input
          class="block w-full border-2 border-black"
          value={usernameInput.value}
          onInput={(e) => usernameInput.value = e.currentTarget.value}
        />
      </label>

      <button
        class="block bg-black text-white px-4 py-2 text-center"
        type="submit"
        disabled={!usernameInput.value}
      >
        Submit
      </button>
    </form>
  );
}
