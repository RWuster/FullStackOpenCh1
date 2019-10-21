const Header = (props) => {
    console.log(props);
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

    return (
        <div className="body">
            <Part name={props.partOne.name} exercise={props.partOne.exercises} />
            <Part name={props.partTwo.name} exercise={props.partTwo.exercises} />
            <Part name={props.partThree.name} exercise={props.partThree.exercises} />
        </div>
    );
}

const Total = (props) => {

    let total = props.part1.exercises + props.part2.exercises + props.part3.exercises;
    return (
        <div className="total">
            <p> Total exercises: {total}</p>
        </div>
    );
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content partOne={part1} partTwo={part2} partThree={part3} />
            <Total part1={part1} part2={part2} part3={part3} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
