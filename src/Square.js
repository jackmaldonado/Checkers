import React, {Component} from 'react';
import './App.css';

class Square extends Component {
    render(){
        let c = 'redSquare'
        let index = this.props.j
        if(this.props.i % 2 === 0)
            index++
        if(index % 2 === 0){
            c = 'blackSquare'
        }
        if(this.props.selected)
            c = 'selectedSquare'
        return (
            <div className={c} id = {this.props.i * 8 + this.props.j} onClick={this.props.callback}>{this.props.value}</div>
        )
    }
}

export default Square;
