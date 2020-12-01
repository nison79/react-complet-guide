
import React, { Component } from 'react';

import Person from './Person/Person';
import styled from 'styled-components'


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
        persons = (
          <div>
            {this.state.persons.map((person,index) => {
              return <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age} 
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event , person.id)}
              />
            })}

              
          </div> 

        );
      }

    return (
      <StyledApp>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <StyledButton alt = {this.state.showPersons}
        onClick={() => this.togglePersonsHandler()}>Show Persons</StyledButton>
        {persons}
      </StyledApp>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

const StyledButton = styled.button`
    font-size:1.2rem;
    border-radius: 3rem;;
    box-shadow: 0 7px 13px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4), inset 0 -2px 0 0 #4b58ba;
    background: linear-gradient(#afb8ff,#4c60fc) no-repeat;
    text-shadow: 0 1px 0 #4b5ef0;
    border:none;
    padding: 10px 10px;
    cursor: pointer;
    width:13rem;
    height:4rem;
    color: white;
    
    &:hover{
        background:lightpink;
        color:black;
        box-shadow: none;
        
        
    }
`

const StyledApp = styled.div`
  text-align: center;
  background-color: rgb(255, 255, 255);

`


export default App;

