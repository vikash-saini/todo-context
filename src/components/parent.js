import React,{ useCallback, useMemo, useState,useContext,useRef, useEffect } from "react";
import ChildA from "./childA";
import SampleComponents from "./shouldComponenet";
import { Container, Row } from "react-bootstrap";
import { ThemeContext } from "../constants/theme-context";

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Suspense>
//   </Router>
// );


export const ForwardChild=React.forwardRef((props,ref)=>{

  return (
    <>
    <input ref={ref} name="refInput"/>
    </>
  )
})

const Parent = () => {
  const [count, setCount] = useState(0);
  const [val, setValue] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [counter, setCounter] = useState(0);

  let ref = useRef();

  let myContext = useContext(ThemeContext);
  console.log(myContext);
  const childCallback = useMemo(
    function () {
      console.log("This is useMemo componenet");
      return (
        <>
          <p>useMemo Component</p>
          Val: {val}
        </>
      );
    },
    [val]
  );

  // whenver page re render then React re-create it's function defined
  const changeHandler = useCallback((val) => {
    console.log("here", val);
    setChildCount(val);
  }, []);

  const handleCounter = (data) => {
    setCounter(data);
  };

  useEffect(()=>{

    if (ref.current) {
      ref.current.value="Vikash Saini";
    }
  },[])
  


  return (
    <>
      <Row>
        <Container className="mt-3">
          <p>Parent Component</p>
          count: {count}
          <hr />
          Child Val: {childCallback}
          <hr />
          <ChildA changeHandler={changeHandler} childCount={childCount} />
          <hr />
          <button onClick={() => setCount(count + 1)}>Click me count</button>
          <button onClick={() => setValue(val + 1)}>Add</button>
          <hr />
          <SampleComponents data={counter} handleCounter={handleCounter} />

          <h2>Forward Ref</h2>
          <ForwardChild ref={ref}/>
        </Container>
      </Row>
    </>
  );
};

export default Parent;
