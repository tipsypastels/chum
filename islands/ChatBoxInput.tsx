import { JSX } from "preact";
import { useContext } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { ClientState } from "./ClientStateProvider.tsx";

export default function ChatBoxInput() {
  const input = useSignal("");
  const [state] = useContext(ClientState);
  const canSubmit = input.value && state.username;

  function onSubmit(e: JSX.TargetedSubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(input);
  }

  return (
    <form class="flex" onSubmit={onSubmit}>
      <input
        class="grow"
        value={input.value}
        onInput={(e) => input.value = e.currentTarget.value}
      />

      <button type="submit" disabled={!canSubmit}>
        Send
      </button>
    </form>
  );
}
