import React from 'react';
import { MySuperComponent } from './MySuperComponent';

class App extends React.Component {
  state = {
    name: "Пупа",
    dummy: false
  };

  toggleMessage = () => {
    const { name } = this.state;

    this.setState({ name: name === "Пупа" ? "Лупа" : "Пупа" });
  };

  toggleDummy = () => {
    this.setState({ dummy: !this.state.dummy });
  };

  render() {
    const { name } = this.state;

    console.log("Рендер App");

    return (
      <>
        <MySuperComponent name={name} />

        <button onClick={this.toggleMessage}>Изменить сообщение</button>
        <button onClick={this.toggleDummy}>Сделать пустое изменение</button>
      </>
    );
  }

};

export { App };
