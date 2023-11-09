import "./App.css";
import Content from "./components/Content";
import HabbitsSteps from "./components/HabbitsSteps";
import Header from "./components/Header";
import Main from "./components/Main";
import Panel from "./components/Panel";
import Popup from "./components/Popup";
import { HabbitsProvider } from "./context/HabbitsContext";

function App() {
  return (
    <HabbitsProvider>
      <Panel />
      <Content>
        <Header />
        <Main>
          <HabbitsSteps />
        </Main>
      </Content>
      <Popup />
    </HabbitsProvider>
  );
}

export default App;
