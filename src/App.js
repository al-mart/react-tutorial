import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: 0, name: 'John', age: 30},
            {id: 1, name: 'Karl', age: 73},
            {id: 2, name: 'Beth', age: 28}
        ],
        otherValue: " Some string Value",
        showList: false
    };

    deletePersonHandler = (index) => {
        let newState = [...this.state.persons];
        newState.splice(index, 1);
        this.setState({
            persons: newState
        })
    };

    nameChangedHandler = (event, id) => {
        let personIndex = this.state.persons.findIndex(el => el.id === id );
        let person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        let allPersons = [...this.state.persons];
        allPersons[personIndex] = person;
        this.setState({
            persons: allPersons
        });
    };

    toggleMenu = () => {
        this.setState({
            showList: !this.state.showList
        });
    };


    render() {
        const styles = {
            backgroundColor: "white",
            font: 'inherit',
            border: '1px solid blue',
            padding: "8px",
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showList) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return (
                                <Person
                                    click={() => {
                                        this.deletePersonHandler(index)
                                    }}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id}
                                    change={ (event) => {this.nameChangedHandler(event, person.id)}}
                                />
                            );
                        })
                    }
                </div>
            );
        }


        return (
            <div className="App">
                <h1> Hey React</h1>
                {/* this is Inefficient dont use it instead use bind syntax*/}
                <button style={styles} onClick={this.toggleMenu}>Switch names</button>
                {persons}

                { /*this.state.showList ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                        />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, "Max!")}
                            changed={this.nameChangedHandler}
                        > My Hobie is swimming
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </div> : null*/}
            </div>
        );
    }

//return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React'));
}

export default App;
