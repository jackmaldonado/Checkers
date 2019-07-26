import React, {Component} from 'react';
import './App.css';
import Square from './Square.js'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            turn: 'r',
            iSelected: -1,
            jSelected: -1,
            
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

    onClickSquare = (e) => {

        let i = Math.floor(e.target.id / 8) 
        let j = e.target.id % 8
        // Import the state
        let {turn} = this.state
        let {cells} = this.state
        let {iSelected} = this.state
        let {jSelected} = this.state

        if(iSelected !== -1){
            if(cells[i][j] === ""){
                cells[i][j] = cells[iSelected][jSelected]
                cells[iSelected][jSelected] = ""
                iSelected = -1
                jSelected = -1
                // Rotate to next player by changing the variable: turn
                
                this.setState({iSelected, jSelected, turn, cells})
                return
            }
        }
            
        // turn r or b
        // cells[i][j] r or b ''
        // if what they clicked on is a valid place
        if(turn === cells[i][j]){
            iSelected = i
            jSelected = j
        }
        // export the state, and force render
        this.setState({iSelected, jSelected, turn, cells})
        
    }
    
    
    render(){
        const {cells} = this.state
        let {iSelected} = this.state
        let {jSelected} = this.state

        let squares = cells.map((row,i) => {
            return row.map((value,j) => {
                let selected = false
                if(iSelected === i && jSelected === j)
                  selected = true
                return (
                    <Square value={value} i={i} j={j} selected = {selected} callback={this.onClickSquare}/>
                    )
                
            })
        })
        return (
            <div className="board">{squares}</div>
        )
    }
}

export default Board;
