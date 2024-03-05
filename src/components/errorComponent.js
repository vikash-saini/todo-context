import React from "react";

export default class ErrorComponenet extends React.Component{

    state={
        hasError:false
    }
    static getDerivedStateFromError(error){
        console.log(error);

        return {hasError:true}

    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);

    }
    render(){

        if (this.state.hasError) {
            return <h1>Error: Not Found</h1>
        }
        return this.props.children
    }
}