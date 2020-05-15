import React from 'react';
import './Person.css'


function Person(props) {
    return(
        <div className='person-container'>
            <div className='total'>
                {props.person.id} / {props.data.length}
            </div>
            <div className='person-content'>
                <div className='name'> 
                {props.person.name.first} {props.person.name.last}
            </div>
            <div className='about'>
                <span className='category'>From:</span> {props.person.city},{props.person.country}
            </div>
            <div className='about'>
                <span className='category'>Job Title:</span> {props.person.title}
            </div>
            <div>
                <span className='category'>Employer:</span> {props.person.employer}
            </div>
            <div className='movie-div'>
                <span className='movies'>Favorite Movies</span>
                <ol>
                    <li>{props.person.favoriteMovies[0]}</li>
                    <li>{props.person.favoriteMovies[1]}</li>
                    <li>{props.person.favoriteMovies[2]}</li>
                </ol>
            </div>
            </div>
            
        </div>
    )
}

export default Person;