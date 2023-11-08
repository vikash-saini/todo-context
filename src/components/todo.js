import React from "react";
import { FormControl } from "react-bootstrap";
import { useWalkThroughDispatch } from "../constants/AppProvider";

const Todo = () => {
  // state initialize
  const [task, SetTask] = React.useState("");
  // ref
  const inputRef = React.useRef(null);
  const dispatch = useWalkThroughDispatch();
  console.log(task);
  React.useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    SetTask(e.target.value);
  };
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: "add", payload: task });
      SetTask("");
    }
  };
  const trimValue = () => {
    if (task && task !== "") {
      const val = task.trim();
      SetTask(val);
    }
  };

  return (
    <>
      <div className="w-50 m-auto">
        <FormControl
          ref={inputRef}
          value={task}
          placeholder="enter task"
          onChange={handleChange}
          onKeyDown={keyPress}
          onBlur={trimValue}
        />
      </div>
    </>
  );
};
export default Todo;
