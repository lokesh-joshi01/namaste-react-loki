import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id:"child"},
    [React.createElement("h1",{},"I am H1"),React.createElement("h2",{},"I am H2")]),
             React.createElement("div",
            {id:"child2"},
        [React.createElement("h1",{},"I am H1 from c2 hit"),React.createElement("h2",{},"I am H2")])
    ])

// const heading = React.createElement(

//     "h1",
//     {id: "heading"},"Hello from React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")
);
root.render(parent);