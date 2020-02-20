import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Render Props
class MousePosition extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div
        style={{ height: '100%', width: '100%' }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Render Props Method</h1>
      <h2>Move the mouse around!</h2>
      <MousePosition
        render={mousePosition => (
          <p style={{ background: 'skyblue' }}>
            The current mouse position is ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// ========== Hook below ==============

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// // React Hook
// function useMousePosition() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   function handleMouseMove(event) {
//     setMousePosition({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return mousePosition;
// }

// function App() {
//   const { x, y } = useMousePosition();

//   return (
//     <div className="App">
//       <h1>React Hook Method</h1>
//       <h2>Move the mouse around!</h2>
//       <p style={{ background: "palegreen" }}>
//         The current mouse position is ({x}, {y})
//       </p>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));
