import React, { Component } from 'react';

export default class Battleship extends Component {
    
    constructor(props){
        
        super(props);
        this.shoot = this.shoot.bind(this);

        this.state = {
            type: "ship",
            length: 4,
            maxShots: 4
        }
    }

    shoot(){
        let maxShots = this.state.maxShots;
        maxShots--;

        this.setState({
            maxShots
        })
    }

    render(){
        return (
            <h1>I'm a battleship!</h1>
        );
    }
}