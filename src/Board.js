import React, {Component} from 'react';
import './App.css';

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            turn: 'r',
            cells: [
                ['','r','','r','','r','','r'],
                ['r','','r','','r','','r',''],
                ['','r','','r','','r','','r'],
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['b','','b','','b','','b',''],
                ['','b','','b','','b','','b'],
                ['b','','b','','b','','b','']  
            ]
        }
    }

    
    render(){
        const {cells} = this.state
        let squares = cells.map((row,i) => {
            return row.map((value,j) => {
                return (
                    <h1>{value}</h1>
                    )
                
            })
        })
        return squares
    }
}

export default Board;
