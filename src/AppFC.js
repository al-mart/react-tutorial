import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'John', age: 30},
            {name: 'Karl', age: 73},
            {name: 'Beth', age: 28}
        ],
        otherValue: " Some string Value"
    });

    const switchNameHandler = (newName) => {
        //console.log("Was Clicked!");
        // Dont do this ... didnt take chages // personsState.persons[0].name = "Johnathan"
        setPersonsState({
            persons: [
                {name: newName, age: 30},
                {name: 'Karl', age: 73},
                {name: 'Beth', age: 28}
            ]
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: "Max", age: 30},
                {name: event.target.value, age: 73},
                {name: 'Beth', age: 28}
            ]
        });
    };
    const  style = {
        backgroundColor: "white",
        font: 'inherit',
        border: '1px solid blue',
        padding: "8px",
        cursor: 'pointer'
    };

    return (

        <div className="App">
            <h1> Hey React</h1>
            {/* this is Inefficient dont use it instead use bind syntax*/}
            <button style={style} onClick={ () => switchNameHandler('MAXIMILIAN') }>Switch names</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={switchNameHandler.bind(this, "Max!")}
                changed={nameChangedHandler}
            > My Hobie is swimming
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React'));
}

export default App;
