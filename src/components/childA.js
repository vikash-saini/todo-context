import { React, memo } from "react";

const ChildA = ({ childCount,changeHandler }) => {
  console.log("child Memo componenet");

  return (
    <>
      <p>This is childA Componenet with Memo method</p>
      <p>Child Count: {childCount}</p>
      <button onClick={() => changeHandler(childCount + 1)}>Click me count</button>
    </>
  );
};

export default memo(ChildA);
