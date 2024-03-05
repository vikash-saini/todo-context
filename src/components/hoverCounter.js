import React from "react";
import withCounter from "./withCounter";

class HoverCounter extends React.Component{

    render(){
        const {count,increaseCount}=this.props;
        return(<>
            <p onMouseOver={increaseCount} >The count on hover is: {count}</p> 
        </>)
    }
}

export default withCounter(HoverCounter);