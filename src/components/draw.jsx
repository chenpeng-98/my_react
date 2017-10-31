import React, { Component } from 'react';
import '../less/draw.less';

class Draw extends Component {
  constructor() {
    super();
    this.state = {
      safeUa: ''
    };
    this.getUa = this.getUa.bind(this);
  }

  getUa() {
    let ua = '';
    for (let i = 0; i < 30; i += 1) {
      const code = 65 + parseInt((Math.random() * 25), 10);
      ua += String.fromCharCode(code);
    }
    this.setState({
      safeUa: ua
    });
    this.timer = setTimeout(() => {
      this.setState({
        safeUa: ''
      });
    }, 1000);
  }

  componentWillUpdate(nextProps,nextState) {
    if (this.state.safeUa && !nextState.safeUa) {
      console.log('clearing ua'); // eslint-disable-line
    }
    console.log('re-rendering'); // eslint-disable-line
  }

  componentWillUnmount() {
    console.log(this.timer); // eslint-disable-line
    this.timer && clearTimeout(this.timer);
  }

  render() {
    // alert(22222);
    console.log('rendering'); // eslint-disable-line
    return <div className="draw">
      <button onClick={this.getUa}>获取UA</button>
      <p className="draw-ua">{ this.state.safeUa }</p>
    </div>
  }
}

export default Draw;