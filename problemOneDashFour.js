/*
Taken from fullstackopen.com/en/part1/javascript#functions
problem description: 
And then place the objects into an array. 
Modify the variable definitions of App into the following form 
and modify the other parts of the application accordingly:
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.course}</h1>
        </div>
    );
}

const Part = (props) => {

    return <p>{props.name} {props.exercises}</p>;
}

const Content = (props) => {
    let partOne = props.part[0];
    let partTwo = props.part[1];
    let partThree = props.part[2];
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
    props.part.forEach((part) => {
        total += part.exercises;
    });
    return (
        <div className="total">
            <p> Total exercises: {total}</p>
        </div>
    );
}
const App = () => {
    const course = 'Half Stack application development';
    const parts = [
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
    ];


    return (
        <div>
            <Header course={course} />
            <Content part={parts} />
            <Total part={parts} />
        </div>
    )
}

//<Content part={parts} />
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*
exercises 1.1 -> refactor so thats its a header, content, total component


exercises 1.4:
<Part name={props.partOne.name} exercise={props.partOne.exercises} />
<Part name={props.partTwo.name} exercise={props.partTwo.exercises} />
<Part name={props.partThree.name} exercise={props.partThree.exercises} />
*/
