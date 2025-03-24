import { JSX } from "preact";
import { useSignal } from "@preact/signals";

export default function ChatBoxInput() {
  const input = useSignal("");

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

      <button type="submit" disabled={!input.value}>
        Send
      </button>
    </form>
  );
}
