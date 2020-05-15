import React from 'react';
import './PageBody.css';
import Card from './Card';

function PageBody() {
    return (
        <div>
            <header className='page-header'>
                <div className='header-content'>
                    Home
                </div>
            </header>
            < Card />
        </div>
    )
}


export default PageBody;