import React, { PureComponent } from "react";

class MySuperComponent extends PureComponent {
  render() {
    const { name } = this.props;
    console.log(`Имя: ${name}`);

    return <h1>Имя: {name}</h1>;
  }
}
export { MySuperComponent }
