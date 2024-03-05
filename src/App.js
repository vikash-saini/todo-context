// react bootstrap
import React from "react";
import { Container, Row } from "react-bootstrap";
// components
import Todo from "./components/todo";
import Lists from "./components/list";

import "./App.css";
import ThemedButton from "./components/themedbutton";
import { ThemeContext, themes } from "./constants/theme-context";
import Parent from "./components/parent";
import DynamicDataTable from "./components/DynamicDataTable";
import TestComponent from "./components/TestComponent";

function App() {
  const [state, setState] = React.useState(ThemeContext);
  const data = React.useContext(ThemeContext);
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App With Context Api</p>
      </header>
      <Row>
        <Container className="mt-3">
          <Todo />
          <Lists />
          <p>Use context outside provider; {data.background}</p>
          <ThemeContext.Provider value={themes.light}>
            {/* <>gg   theme:{data.background}</> */}
            <ThemeContext.Consumer>
              {(value) => (
                <h1>context data using consumer: {value.background}</h1>
              )}
            </ThemeContext.Consumer>
            <section>
            <Parent/>
          </section>
            <ThemedButton />
          </ThemeContext.Provider>
          <section>
            <ThemedButton />
          </section>
          {/* <section>
            <Parent/>
          </section> */}
          {/* <DynamicDataTable/> */}
          <section>
            <br/>
            <br/>
            <p>Update state asynchronously</p>
            <TestComponent/>
          </section>
        </Container>
      </Row>
    </div>
  );
}

export default App;
