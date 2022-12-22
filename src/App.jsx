import React, { PureComponent, memo, useCallback } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function About() {
  return <h2>About</h2>;
}

function Users(props) {
  console.log({ props });

  // Пример лучших практик: колбеки внутри FC надо оборачивать в React.useCallback
  const goToAbout = useCallback(() => {
    props.history.push('/about');
  }, [props.history]);

  return (
    <div>
      <h2>Users</h2>
      <p onClick={goToAbout}>Перейти в About по пушу (кликни меня)</p>
    </div>
  );
}

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                </ul>
              </nav>

              <div>
                <Switch>
                  <Route path="/about" component={About} />

                  <Route path="/users" component={Users} />

                  <Route exact path="/">
                    {(props) => {
                      return (
                        <span>
                          Домашняя{' '}
                          <a style={{ color: 'blue', cursor: 'pointer' }} onClick={() => props.history.push('/about')}>
                            (кликни на меня и перейдешь на About)
                          </a>
                        </span>
                      );
                    }}
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
