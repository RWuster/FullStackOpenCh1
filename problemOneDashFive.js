/*
taken from: https://fullstackopen.com/en/part1/javascript#functions

1.5: course information step5
Let's take the changes one step further. 
Change the course and its parts into a single Javascript object. Fix everything that breaks.
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.course.name}</h1>
        </div>
    );
}

const Part = (props) => {

    return <p>{props.name} {props.exercises}</p>;
}

const Content = (props) => {
    let partOne = props.course.parts[0];
    let partTwo = props.course.parts[1];
    let partThree = props.course.parts[2];
    return (
        <div className="body">
            <Part name={partOne.name} exercises={partOne.exercises} />
            <Part name={partTwo.name} exercises={partTwo.exercises} />
            <Part name={partThree.name} exercises={partThree.exercises} />
        </div>
    );
}

const Total = (props) => {
    let total = 0;
    let parts = props.course.parts;
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



