import React, { Component } from 'react';
import Cv from './Cv.jsx'
import uaVersion from '../ua.js';
import engVersion from '../eng.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

class App extends Component {
  state = {
    lang: `en`,
    reverted: true
  }

  render() {
    let version = this.state.lang === `en` ? engVersion : uaVersion;
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
        <img src="img/me.jpg" alt="me" class="img-thumbnail"/>
        <table className="table">
          <Cv articles={version} />
        </table>
      </div>
    );
  }

  language = () => this.setState({
    lang: this.state.lang === `en` ? `ua` : `en`,
    reverted: !this.state.reverted
  })
}

export default App;