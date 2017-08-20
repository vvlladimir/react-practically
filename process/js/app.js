var React = require('react');
var ReactDOM = require('react-dom');


var MainInterface = React.createClass({
  render: function() {
    return (
      <div className="well">
        <h1>Pet Appointment 1</h1>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <h2>Pet Appointment 2</h2>
        <ul>
          <li>Input 1</li>
          <li>Input 2</li>
          <li>Input 3</li>
          <li>Input 4</li>
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
);
