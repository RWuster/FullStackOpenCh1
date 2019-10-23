/*
taken from: https://fullstackopen.com/en/part1/javascript#functions

1.5: course information step5
Let's take the changes one step further. 
Change the course and its parts into a single Javascript object. Fix everything that breaks.
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course: { name } }) => {
    return (
        <div className="header">
            <h1>{name}</h1>
        </div>
    );
}

const Part = ({ name, exercises }) => (

    <p>{name} {exercises}</p>
);

const Content = ({ course: { parts } }) => {
    //we are destructing only parts
    return (
        <div className="body">
            <Part name={parts[0].name} exercises={parts[0].exercises} />
            <Part name={parts[1].name} exercises={parts[1].exercises} />
            <Part name={parts[2].name} exercises={parts[2].exercises} />
        </div>
    );
}

const Total = ({ course: { parts } }) => {
    let total = 0;

    parts.forEach((part) => {
        total += part.exercises;
    });
    return (
        <div className="total">
            <p> Total exercises: {total}</p>
        </div>
    );
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    };


    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

