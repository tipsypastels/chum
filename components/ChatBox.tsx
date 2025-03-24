import ChatBoxInput from "../islands/ChatBoxInput.tsx";

interface ChatBoxProps {
  title: string;
}

export default function ChatBox(props: ChatBoxProps) {
  return (
    <div class="flex h-[600px] max-h-full w-[400px] max-w-full flex-col border-2 border-slate-800 shadow-lg">
      <div class="p-4 text-center text-xl font-bold">
        {props.title}
      </div>

      <div class="grow border-y-2 border-y-slate-800">
        hi
      </div>

      <div class="p-4">
        <ChatBoxInput />
      </div>
    </div>
  );
}
