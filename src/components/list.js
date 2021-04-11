import React from "react";
import {
  useWalkThroughState,
  useWalkThroughDispatch,
} from "../constants/AppProvider";

const Lists = () => {
  const state = useWalkThroughState();
  const dispatch = useWalkThroughDispatch();
  // console.log(state);

  const deleteItem = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  return (
    <>
      List goes here
      <div>
        <ul>
          {state.list.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.task}</span>
                <span className="ml-2" onClick={() => deleteItem(item.id)}>
                  x
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Lists;
