import React from "react";
import { FormControl, Button } from "react-bootstrap";
import {
  useWalkThroughState,
  useWalkThroughDispatch,
} from "../constants/AppProvider";
import ReactTable from "react-table";

const Lists = () => {
  const stateData = useWalkThroughState();
  const dispatch = useWalkThroughDispatch();
  console.log(stateData);

  const [tabledata, settabledata] = React.useState([
    { id: "3e5bc900-108f-4609-b19e-ad7d4f302ee3", task: "dcsdc" },
    { id: "afe864bb-f866-4cdb-ae65-069653ad9123", task: "cdsc" },
    { id: "42ae51b3-5e89-4c1f-a689-5ccd3709a64b", task: "dcd" },
    { id: "6a8e3681-bbad-415e-afae-9bc8be2b19bd", task: "dcv" },
    { id: "427fe8fd-21fb-467f-8143-57e62ae39cbb", task: "dfvc" },
    { id: "76bc1b75-3172-4bb4-9e28-df2697f74060", task: "fvg" },
    { id: "4b5b12d8-b5a7-4dfe-92e4-c24f6ef3d5f1", task: "bgfb" },
  ]);
  const columnData = [
    {
      Header: "ID",
      accessor: "id",
      show: true,
    },
    {
      Header: "Task",
      accessor: "task",
      show: true,
    },
    {
      Header: "Action",
      accessor: "action",
      show: true,
      Cell: (row) => {
        console.log(row);
        return (
          <React.Fragment>
            <div className="btn-container">
              <Button onClick={() => handleUpdate(row)}>EDIT</Button>
              &nbsp;
              <Button onClick={() => handleConfirm(row)}>Delete</Button>
            </div>
          </React.Fragment>
        );
      },
    },
  ];

  const handleConfirm = (id) => {
    console.log(id);
  };

  const handleUpdate = (row) => {
    console.log(row);
    // const obj = {
    //   label: row.role,
    //   value: row.roleID,
    // };
  };

  // React.useEffect(() => {
  //   if (stateData?.list) {
  //     console.log(stateData);
  //     console.log("here");
  //     settabledata(stateData?.list);
  //   }
  // }, [stateData]);

  const deleteItem = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  // console.log(tabledata);
  return (
    <>
      List goes here
      <div>
        <ul>
          {stateData?.list.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.task}</span>
                <span
                  className="ml-2"
                  onClick={() => deleteItem(item.id)}
                  style={{ cursor: "pointer" }}
                >
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
