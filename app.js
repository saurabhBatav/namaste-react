const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h1", {}, "Namaste React"),
  React.createElement("p", {}, "Namaste React para"),
]);
//const content = React.createElement("p", {}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//root.render(content);
