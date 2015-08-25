import React from 'react';

// Super simple example of the simplest possible React component
export default class HelloWorld extends React.Component {

  // Not necessary if we only call super, but we'll need to initialize state, etc.
  constructor(props, context) {
    super(props, context);
    this.state = props.helloWorldData;
  }

  _handleChange() {
    const name = React.findDOMNode(this.refs.name).value;
    this.setState({name});
  }

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <p>
          Say hello to: <input type="text" ref="name" defaultValue={this.state.name} onChange={::this._handleChange} />
        </p>
      </div>
    );
  }
}