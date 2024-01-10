const App = React.createElement("p", { style: { color: "red" } }, "Hello");

// const App = () => {
//     return (
//         <>
//             <h1>Hello App</h1>
//         </>
//     )

// }
// const container = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(React.createElement(App));
