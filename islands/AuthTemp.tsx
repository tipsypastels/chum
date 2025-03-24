import { useSignal } from "@preact/signals";
import { Dispatch, useContext } from "preact/hooks";
import { ClientAction, ClientState } from "./ClientStateProvider.tsx";

export default function AuthTemp() {
  const [state, dispatch] = useContext(ClientState);
  const Component = state.username ? SignOut : SignIn;
  return <Component state={state} dispatch={dispatch} />;
}

interface InnerProps {
  state: ClientState;
  dispatch: Dispatch<ClientAction>;
}

function SignIn({ dispatch }: InnerProps) {
  const signInInput = useSignal("");

  return (
    <div>
      Sign in as{" "}
      <input
        value={signInInput.value}
        onInput={(e) => signInInput.value = e.currentTarget.value}
      />
      <button
        type="button"
        disabled={!signInInput.value}
        onClick={() =>
          dispatch({ type: "sign-in", username: signInInput.value })}
      >
        Go
      </button>
    </div>
  );
}

function SignOut({ state, dispatch }: InnerProps) {
  return (
    <div>
      Signed in as <span>{state.username}</span>
      <button type="button" onClick={() => dispatch({ type: "sign-out" })}>
        {" "}
        Sign Out
      </button>
    </div>
  );
}
