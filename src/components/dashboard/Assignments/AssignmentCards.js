import React from 'react';
import './AssignmentsCards.css';
import development from '../../images/assignment-Cards/development.svg';

function AssignmentCards() {
    return (
        <div className='assignmentCards'>
            <div className='assignmentCards__container'>
                <section className='assignmentCards__sec1'>
                    <img src={development} alt='development' />
                    <h2>Software Developer</h2>
                    <p>Level 1</p>
                </section>
                <section className='assignmentCards__sec2'>
                    <div className='assignmentCards__sec2__question'>
                        <p>Questions</p>
                        <p className='bold'>9</p>
                    </div>
                    <div className='assignmentCards__sec2__groups'>
                        <p>Deadline</p>
                        <p className='bold bold__sup'>12<sup>th</sup> Sep, 2020</p>
                    </div>
                </section>
                <div className='assignmentCards__btn'>
                    <button>Start</button>
                </div>
            </div>
        </div>
    )
}

export default AssignmentCards
