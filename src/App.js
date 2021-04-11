// react bootstrap
import { Container, Row } from "react-bootstrap";
// components
import Todo from "./components/todo";
import Lists from "./components/list";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App With Context Api</p>
      </header>
      <Row>
        <Container className="mt-3">
          <Todo />
          <Lists />
        </Container>
      </Row>
    </div>
  );
}

export default App;
