import ChatBox from "../components/ChatBox.tsx";
import Container from "../components/Container.tsx";
import AuthTemp from "../islands/AuthTemp.tsx";
import ClientStateProvider from "../islands/ClientStateProvider.tsx";

export default function Home() {
  return (
    <ClientStateProvider>
      <Container>
        <AuthTemp />
        <ChatBox title="Chat" />
      </Container>
    </ClientStateProvider>
  );
}
