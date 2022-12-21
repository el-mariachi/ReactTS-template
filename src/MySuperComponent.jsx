import React, { Component } from "react";

class MySuperComponent extends Component {
  render() {
    const { name } = this.props;
    console.log(`Имя: ${name}`);

    return <h1>Имя: ${name}</h1>;
  }
}
export { MySuperComponent }
