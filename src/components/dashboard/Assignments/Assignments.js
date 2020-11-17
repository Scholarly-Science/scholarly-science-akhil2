import React from 'react';
import AssignmentCards from './AssignmentCards';
import './Assignments.css';

function Assignments() {
    return (
        <div className='assignments'>
            <div className='assignments__cards'>
                <AssignmentCards />
                <AssignmentCards />
                <AssignmentCards />
                <AssignmentCards />
                <AssignmentCards />
                <AssignmentCards />
            </div>
        </div>
    )
}

export default Assignments
