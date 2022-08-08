var contentNode = document.getElementById('contents');
var component = React.createElement(
  "h1",
  { className: "helloHeader" },
  "Hello World!"
); // A simple JSX component
ReactDOM.render(component, contentNode); // Render the component inside the content Node