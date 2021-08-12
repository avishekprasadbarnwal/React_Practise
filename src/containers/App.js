// This is for repo check
import React, { Component } from 'react';
import './App.css';
// import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import authContext from '../Context/auth-context';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props){
    console.log('constructor()');
    super(props);
    this.state = {
      persons: [
        { _id:"6154", name: 'Max', age: 28 },
        { _id:"6164", name: 'Manu', age: 29 },
        { _id:"6148", name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0, 
      authenticated: false
    };
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

    this.setState((prevState, props) => {
      return {persons: persons, changeCounter: prevState.changeCounter + 1};
    });
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps()', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate()');
    
    // In the code below we first need to make a comparison between the current props and the nextProps
    // and based upon which we return true or false , but in this case we are hardcodding it for demo
    return true;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate()');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount()');
    return null;
  }

  loginHandler = () => {
    this.setState({authenticated: true});
    console.log(this.state.authenticated);
  }

  render () {
    console.log('[App.js] rendering...');

    let persons;

    if(this.state.showPersons === true) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}></Persons>  
        </div>
      );
      
    } else {
      // In this case the else statement is not required 
      persons = null;
    }

    // const classes = 'App';

    return (
      <Auxiliary >
          <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
          <authContext.Provider value={{ 
              authenticated: this.state.authenticated, 
              login: this.loginHandler
            }}
          >
            {this.state.showCockpit ? 
              <Cockpit
                title={this.props.title}
                showPerson={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonHandler}
              ></Cockpit>
            : null}
            {persons}
          </authContext.Provider>
      </Auxiliary>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, 'App');
