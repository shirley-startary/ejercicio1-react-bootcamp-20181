// Dependencia
import React, { Component} from 'react';

// Assets
import './css/Content.css';

class Content extends Component{
  constructor() {
    super()
    this.state = {
      count: 0,
      num1: 0,
      num2: 0,
      result: 0
    }
    this.handleonclick = this.handleonclick.bind(this);
    this.handleonInputChange= this.handleonInputChange.bind(this);
  }

  handleonclick(e){
    console.log(e.target.id);
    if (e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      })
    } else if (e.target.id === 'substract') {
      this.setState({
        count: this.state.count - 1
      })
    } else {
      this.setState({
        count: 0
      })
    }
  }

  handleonInputChange(e){
    console.log(e.target.id);
    if (e.target.id === 'num1') {
      this.setState({
        num1 : e.target.value
      })
    } else if (e.target.id === 'num2'){
      this.setState({
        num2 : e.target.value
      })
    } else {
      this.setState({
        result : Number(this.state.num1) + Number(this.state.num2)
      })
    }
  }

  render() {
    // console.log(this);
    return (
      <div className="Content">
        <h1>Soy el Contenido Chido!!</h1>
        <p>Counter: {this.state.count}</p>
        <button type="button" id="add" onClick={this.handleonclick}>+</button>
        <button type="button" id="substract" onClick={this.handleonclick}>-</button>
        <button type="button" id="Reset" onClick={this.handleonclick}>Reset</button>
        <div>
          <input type="number" id="num1" value={this.state.num1} onChange={this.handleonInputChange}/>
          +
          <input type="number" id="num2" value={this.state.num2} onChange={this.handleonInputChange}/>
          <button onClick={this.handleonInputChange}>=</button>
          <p>{this.state.result}</p>

        </div>
      </div>
    );
  }
}

export default Content;
