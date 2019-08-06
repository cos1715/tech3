import React, { Component } from 'react';

import Cv from './Cv.jsx';

import Img from '../assets/me.jpg';

import uaVersion from '../ua.js';
import engVersion from '../eng.js';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    lang: `en`,
    reverted: true
  }

  language = () => this.setState({
    lang: this.state.lang === `en` ? `ua` : `en`,
    reverted: !this.state.reverted
  })

  render() {
    const version = this.state.lang === `en` ? engVersion : uaVersion;

    return (
      <div className="container">
        <div className="jumbotron">
          <header className="display-3">
            <h1 className="App-title">{this.state.reverted ? `Resume` : `Резюме`}</h1>
          </header>
          <button className="btn btn-primary btn-lg float-right" onClick={this.language}>
            {this.state.reverted ? `UKR` : `ENG`}
          </button>
        </div>
        <img src={Img} alt="me" className="img-thumbnail" />
        <table className="table">
          <Cv articles={version} />
        </table>
      </div>
    );
  }
}

export default App;