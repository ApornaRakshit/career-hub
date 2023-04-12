import React from "react";

const Blog = () => {
    return (
        <div className="m-10 text-xl font-semibold">
            <h4> 1.When should use context API???</h4>
            <h4> Ans.When some data needs to be accessible by many components at different nesting levels</h4>
            <h4>2.What is custom hook???</h4>
            <h4>Ans.Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. If there is a requirement to add a feature, one can install a third-party library and solve the problem. </h4>
            <h4>3.What is useRef??? </h4>
            <h4>Ans.useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference . A reference is an object having a special property current.</h4>
            <h4>4.What is useMemo???</h4>
            <h4>Ans.The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running</h4>


        </div>
    )
}

export default Blog 