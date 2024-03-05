import React, { Component } from "react";
import {
  FormGroup,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";

let user = {
  userName: "userName",
  email: "email",
};
export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          attrElementId: "userName",
        },
        {
          attrElementId: "email",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e);
    let id = e.target.id;
    let val = e.target.value;
    const {fields:data} = this.state;
    let newArr=  data.map((row)=>{
        if (row.attrElementId == id) {
            row["attrElementValue"]=val;
        }       
        return row;
    })
    console.log(newArr);
    this.setState({
      ...this.state,
      fields:newArr,
    });
  }

  handleClear() {
    console.log("clear");
    const {fields:data} = this.state;
    let newArr=  data.map((row)=> {
        row["attrElementValue"]="";
        return row;
    })
    console.log(newArr);
    this.setState({
      ...this.state,
      fields:newArr,
    });
  
  }

  handleSubmit(){
    console.log("submit");
    const {fields:data} = this.state;
    let arr = data.map(row=>row.attrElementValue);
    console.log(arr);
    let checkEmpty = arr.every(ele=>ele == undefined || ele =='');
    console.log(checkEmpty);

  }

  render() {
    console.log(this.state);
    return (
      <>
        <Container>
          <div className="text-center">UserForm</div>
          <div>
            <Form>
              {this.state.fields.map((form) => (
                <>
                  <FormGroup>
                    <FormControl
                      name={form?.attrElementId}
                      value={form?.attrElementValue}
                      id={form?.attrElementId}
                      onChange={(event) => this.handleChange(event)}
                      placeholder={form.attrElementId}
                    />
                  </FormGroup>
                </>
              ))}

              {/* <FormGroup>
                    <FormControl name="email" value={this.state.email} id={user.email} onChange={(event)=>this.handleChange(event)}/>
                </FormGroup> */}
                 <Button type="button" onClick={() => this.handleSubmit()}>
                submit
              </Button>
              <Button type="button" onClick={() => this.handleClear()}>
                Clear
              </Button>
            </Form>
          </div>
        </Container>
      </>
    );
  }
}
