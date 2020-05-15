import React from 'react';
import './Button.css'

function Buttons(props){
    return(
        <div className='button-div'>
            <button className='button'
            onClick={() => {props.handlePrevious()}}
            >
                {`< Previous`}
            </button>

            <button className='button'
            onClick= {() => {props.handleNext()}}
            >
                {`Next >`}
            </button>
        </div>
    )
}

export default Buttons;