
import React, { Component } from 'react';

import Persons from './Persons.js/Persons'
import styled from 'styled-components'
import Cockpit from './Cockpit/Cockpit';


class App extends Component {
  
  state = {
    persons: [
      {id: 'gfdg', name: 'Max', age: 28 },
      {id: 'hgkj', name: 'Manu', age: 29 },
      {id: 'erwsd', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value', 
    showPersons : false,
  };



  nameChangedHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id ;
    });

    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] =person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex , 1);
    this.setState({persons : persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    

    let persons = null;
      if (this.state.showPersons) {
        persons = 
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler} 
            changed = {this.nameChangedHandler}
          />
      }

    return (
      <StyledApp>
        <Cockpit 
        title = {this.props.appTitle}
        showPersons={this.state.showPersons} 
        persons = {this.state.persons} 
        clicked = {this.togglePersonsHandler}
        /> 
        {persons}
      </StyledApp>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

const StyledApp = styled.div`
  text-align: center;
  background-color: rgb(255, 255, 255);
`


export default App;

