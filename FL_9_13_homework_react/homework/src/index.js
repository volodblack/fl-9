import React, { Component } from 'react';
import { render } from 'react-dom';

import './scss/index.scss';

const rootNode = document.querySelector('#root');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: [],
    };
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.getList);
  }

  getList() {
    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(response => response.json())
      .then((responseJson) => {
        const resultyt = responseJson.map(obj => obj);
        this.setState({ resultyt });
      });
  }

  render() {
    return (
      <div className="list-component">
        <div>
          <h1>Playlist</h1>
          {
            this.state.resultyt.map(obj => (
              <div key={obj.id}>
                <div>
                  <img src={obj.poster} alt="poster" />
                </div>
                <div className="description">
                  <span className="author">{obj.author}</span>
                  <p>{obj.title}</p>
                </div>
                <audio controls="controls"><source src={obj.mp3} /></audio>
                <hr />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

render(
  <App />,
  rootNode,
);
