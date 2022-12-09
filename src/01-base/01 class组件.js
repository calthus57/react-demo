import React from "react";
import FunApp from "./02 函数组件";
class ClassApp extends React.Component{
    render(){
        return (
            <div>
                <FunApp/>
                <div>hello</div> 
                <div>dsada</div>
            </div>
            
        )
    }
}
export default ClassApp