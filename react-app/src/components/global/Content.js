import React, {Component} from 'react';
import './css/Content.css';

class Content extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            number1: 0,
            number2: 0,
            result: 0
        };

        this.handleCountClick = this.handleCountClick.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.handleResult = this.handleResult.bind(this);
    };

    // los metodos que estan para los metodos onclick deben llevar handle

    handleCountClick(e){
        // console.log(e);
        if (e.target.id === 'add'){
            this.setState({
                count: this.state.count + 1
            });
        }
        else if (e.target.id === 'sub'){
                this.setState({
                    count: this.state.count - 1
                });
        }
        else if (e.target.id === 'reset'){
            this.setState({
                count: 0
            });
        }
    }

    handleInputChanged(e){
        if(e.target.id === 'number1'){
            this.setState({
                number1: Number(e.target.value)
            });
        }

        else if(e.target.id === 'number2'){
            this.setState({
                number2: Number(e.target.value)
            });
        }
    }

    handleResult(e){
        this.setState({
            result: this.state.number1 + this.state.number2
        });
    }

    componentDidMount(){
        this.setState({
            count:1
        })
    };

    render() {
        return (
            <div className="Content">
                <h1>Contenido</h1>
                <h2>Counter: {this.state.count} </h2>
                <p>
                    <button id="add" onClick={this.handleCountClick.bind(this)}>+</button>
                    <button id="sub" onClick={this.handleCountClick.bind(this)}>-</button>
                    <button id="reset" onClick={this.handleCountClick.bind(this)}>reset</button>
                </p>
                
                <h2>Calculadora</h2>
                <p>
                    <input id="number1" type="Number" value={this.state.number1} onChange={this.handleInputChanged}/>
                    +
                    <input id="number2" type="Number" value={this.state.number2} onChange={this.handleInputChanged}/>
                    <button id="result" onClick={this.handleResult.bind(this)}>=</button>
                    <input id="suma" type="Number" value={this.state.result}/>
                </p>
            </div>
        );
    }
}

export default Content;
