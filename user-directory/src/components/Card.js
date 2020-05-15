import React, { Component } from 'react';
import './Card.css'
import Person from './Person'
import Buttons from './Buttons'
import Data from '../data'

class Card extends Component{
    constructor(){
        super();
        this.state = {
            data: Data,
            personTracker: 0,
            person: Data[0]
        }


        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }

    handleNext(){
        if(this.state.personTracker < this.state.data.length -1){
            this.setState({
                personTracker: this.state.personTracker + 1,
                person: Data[this.state.personTracker + 1]
            })
        }
        
    }

    handlePrevious(){
        if(this.state.personTracker > 0){
            this.setState({
                personTracker: this.state.personTracker - 1,
                person: Data[this.state.personTracker - 1]
            })
        }
    }

    render(){
        console.log(this.state.personTracker)
        return (
        <div className='card-container'>

            <div className='card-content'>
                <Person person={this.state.person} data={this.state.data}/>
            </div>


            < Buttons handleNext={this.handleNext} handlePrevious={this.handlePrevious}
            length={this.state.data.length}
            />
        </div>
    )
    }
    
}

export default Card;