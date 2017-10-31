import React, { Component } from 'react';
import { render } from 'react-dom';
import HelloMessage from './components/hello.jsx';
import Draw from './components/draw.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPage: 'hello'
    };
    this.changePage = this.changePage.bind(this);
    this.closePage = this.closePage.bind(this);
  }

  changePage(page) {
    this.setState({
      showPage: page
    });
  }

  closePage(page) {
    if (this.state.showPage === page) {
      this.setState({
        showPage: ''
      });
    }
  }

  render() {
    return <div>
      <HelloMessage
        changePage={ this.changePage }
        closePage={ this.closePage }
        name={'John'}
      />
      { this.state.showPage === 'draw' && <Draw /> }
    </div>;

  }
}


render(
  <App />,
  document.getElementById('reactRoot')
);