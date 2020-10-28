import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hello, this is {this.props.first} {this.props.last}
          {this.props.authed}
        </p>
      </div>
    );
  }
}

export default Hello;
