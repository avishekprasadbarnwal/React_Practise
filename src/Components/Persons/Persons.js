import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{ 


  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate()');
    
    // In the code below we first need to make a comparison between the current props and the nextProps
    // and based upon which we return true or false , but in this case we are hardcodding it for demo
    if(nextProps.persons !== this.props.persons){
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate()');
    return {
      message: 'Snapshot!!!'
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate()');
    console.log(prevProps, snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount()');
  }

  render(){

    console.log('[Persons.js] rendering...');

    return(
      this.props.persons.map((person, index) => {
          return <Person 
                      click={() => this.props.clicked(index)}
                      key={person._id}
                      name={person.name} 
                      age={person.age}
                      changed={(even) => this.props.changed(even, person._id)}
                    />
          })
    )}
    
};


export default Persons;
