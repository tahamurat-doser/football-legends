import Container from "react-bootstrap/Container"
import Header from "./components/header/Header";
import Legends from "./components/legends/Legends";

function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <Legends />
    </Container>
  );
}

export default App;
