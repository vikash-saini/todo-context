import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useWalkThroughState,
  useWalkThroughDispatch,
} from "../constants/AppProvider";
import Image from "./img";
import ErrorComponenet from "./errorComponent";

const Users = () => {
  const state = useWalkThroughState();
  const dispatch = useWalkThroughDispatch();
  const [users, setUsers] = useState([]);
  // console.log(state);

  const deleteItem = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {

    // using axios lib
    axios.get("http://localhost:3000/posts").then((res)=>{
      console.log(res);
      setUsers(res.data);
    }).catch();

    // default fetch method of javascript
    // fetch("http://localhost:3000/posts")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     setUsers(result);
    //   })
    //   .catch();
  };
  return (
    <>
      Users List goes here
      <div>
        <ul>
          {users.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>
                  <ErrorComponenet>
                    <Image src={item.img} />
                  </ErrorComponenet>{" "}
                </p>
                {/* <span
                  className="ml-2"
                  onClick={() => deleteItem(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  x
                </span> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Users;
