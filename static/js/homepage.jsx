"use strict";

function Homepage(props) {
  return (
    <React.Fragment>
      <h3>Welcome Friend!</h3>
      <a href="/cards">Here are some cards</a>
      <img src="/static/img/balloonicorn.jpg" /> 
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
