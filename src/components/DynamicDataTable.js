import React from "react";
import { Form, FormControl, Button, Row, ListGroup } from "react-bootstrap";
// import ReactTable from "react-table";




const DynamicDataTable = () => {
  const tabledata = [
    { id: "3e5bc900-108f-4609-b19e-ad7d4f302ee3", task: "dcsdc" },
    { id: "afe864bb-f866-4cdb-ae65-069653ad9123", task: "cdsc" },
    { id: "42ae51b3-5e89-4c1f-a689-5ccd3709a64b", task: "dcd" },
    { id: "6a8e3681-bbad-415e-afae-9bc8be2b19bd", task: "dcv" },
    { id: "427fe8fd-21fb-467f-8143-57e62ae39cbb", task: "dfvc" },
    { id: "76bc1b75-3172-4bb4-9e28-df2697f74060", task: "fvg" },
    { id: "4b5b12d8-b5a7-4dfe-92e4-c24f6ef3d5f1", task: "bgfb" },
  ];

  const handleCheck = (doc) => (e) => {
    console.log("checked: ", e.target.checked);
    console.log("clicked: ", doc);
  };

  console.log(tabledata);
  return (
    <>
      Datatable goes here
      <div>
      <div>
          Boostrap List goes here
          <ListGroup>
            {tabledata && tabledata.map((doc, index) => {
              const isChecked = doc.active === "Y";
              return (
                <ListGroup.Item className="dare-role-group" key={index}>
                  <div className="btn-container">
                    <Form.Check type="checkbox" onChange={handleCheck(doc)}/>
                  </div>
                  <div className="role-name">{doc.task}</div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default DynamicDataTable;
