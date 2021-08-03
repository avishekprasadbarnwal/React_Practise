// This is for repo check
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { _id:"6154", name: 'Max', age: 28 },
      { _id:"6164", name: 'Manu', age: 29 },
      { _id:"6148", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // Here we need to have the id of the person who wants to make changes
  nameChangedHandler = ( even, _id ) => {

    const personIndex = this.state.persons.findIndex( (p) => { return p._id === _id; });

    const person = {...this.state.persons[personIndex]}

    person.name = even.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons;

    if(this.state.showPersons === true) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        key={person._id}
                        changed={(even) => this.nameChangedHandler(even, person._id)}
                        />
            })
          }  
        </div>
      );
      style.backgroundColor = 'red'
    } else {
      // In this case the else statement is not required 
      persons = null;
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
