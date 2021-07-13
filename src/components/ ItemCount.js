import React, { Component } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import '../assets/styles/ItemCount.css';

export default class  ItemCount extends Component {

    constructor(props){
        super();
        this.state = {
            count:1,
            max:props.stock
        }
    }

    addCount = () => {
        if(this.state.count < this.state.max){
        this.setState({
            count: this.state.count+1
        })
        }
    }

    subtractCount = () => {
        console.log('algo');
        if(this.state.count >1){
        this.setState({
            count: this.state.count-1
        })
        }
    }

    render() {
        return (
            <div className="count-container">
                <span onClick={this.subtractCount}>
                    <ArrowLeftIcon style={{ fontSize: 40}} />
                </span>
                <span >{this.state.count}</span>
                <span onClick={this.addCount}>
                    <ArrowRightIcon style={{ fontSize: 40}} />
                </span>
            </div>
        )
    }
}


// import React from 'react'

// export default function  ItemCount(props) {

//     console.log('props',props)
    
    
//     // function ItemCount({ stock, initial,  onAdd }) {
//     //     // Desarrollar lógica
//     // }

//     function add (){

//         console.log('add');
//         props.initial = props.initial + 1;
//     }

//     function drop (){
//         console.log('drop');
//     }

//     return (
//         <div>
//             <span onClick={drop}>-</span>
//             <span>{props.initial}</span>
//             <span onClick={add}>+</span>
//         </div>
//     )
// }