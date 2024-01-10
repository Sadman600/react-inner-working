import { MyApp } from "./test";

const App = () => {
    return React.createElement(
        "p",
        { style: { color: "red" } },
        "Hello React",
        MyApp()
    );
}


// const container = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
console.log("Hello");

