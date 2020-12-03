// import React, { useState } from 'react';//this is just for using hook
import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import Radium, { StyleRoot } from 'radium'


//*****************************************/
//**********CLASS BASE COMPONENT **********/
//*****************************************/ 
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanei', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }; //OR  Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];// it makes a copy of that array instead of referencing to the existing array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doeasShow = this.state.showPersons;
    this.setState({ showPersons: !doeasShow });// it does the toggle
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}

        </div>
      </StyleRoot>
    );
  }


}


//*****************************************/
//**********FUNCTIONAL COMPONENT **********/
//*****************************************/ 
// const app = () => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Stephanie', age: 26}
//     ]
//   });

//   const [otherState]= useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = (newName) => {
//     // console.log("Was clicked!");
//     //DON'T DO THIS: personsState.persons[0].name ="Nazanin";
//     setPersonsState({persons:  [
//       {name: newName, age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Stephanie', age: 30} 
//     ]})
//   }

//   const nameChangeHandler = (event) =>{
//     setPersonsState({persons:  [
//       {name: 'Nazanin', age: 28},
//       {name: event.target.value, age: 29},
//       {name: 'Stephanie', age: 30} 
//     ]})
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I am a React App!</h1>
//       <p>This is really working</p>
//       <button onClick={() => switchNameHandler('Nazanin!!')}>Switch Name</button>
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age}/>
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age}
//         click={switchNameHandler.bind(this, 'Ali')}
//         changed={nameChangeHandler}>My Hobbies: Racing</Person>
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age}/>
//     </div>
//   );
//     // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi, I am a React App!'));
// }

// export default app;

export default Radium(App);


