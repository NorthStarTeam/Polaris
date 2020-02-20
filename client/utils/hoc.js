import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Higher-Order Component
function withMousePosition(WrappedComponent) {
  return class extends Component {
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
      return <WrappedComponent {...this.props} mousePosition={this.state} />;
    }
  };
}

function App(props) {
  const { x, y } = props.mousePosition;

  return (
    <div className="App">
      <h1>Higher-Order Component Method</h1>
      <h2>Move the mouse around!</h2>
      <p style={{ background: 'orange' }}>
        The current mouse position is ({x}, {y})
      </p>
    </div>
  );
}

const AppWithMousePosition = withMousePosition(App);

ReactDOM.render(<AppWithMousePosition />, document.getElementById('root'));
