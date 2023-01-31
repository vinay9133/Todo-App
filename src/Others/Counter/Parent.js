import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    render(){
        return (
            
            <div>
            <h1>I am Vinayak</h1>
            <h3> <Child /></h3>
            </div>
        )
    }
} 

export default Parent;