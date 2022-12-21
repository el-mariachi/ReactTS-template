import { Mouse } from './Mouse';
import React from 'react';

export default function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <Component {...this.props} mouse={mouse} />
        )} />
      );
    }
  }
}
