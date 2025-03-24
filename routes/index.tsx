import ChatBox from "../components/ChatBox.tsx";
import Container from "../components/Container.tsx";
import ClientStateProvider from "../islands/ClientStateProvider.tsx";

export default function Home() {
  return (
    <ClientStateProvider>
      <Container>
        <ChatBox title="Chat" />
      </Container>
    </ClientStateProvider>
  );
}
