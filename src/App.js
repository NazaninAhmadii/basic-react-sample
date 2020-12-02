// import React, { useState } from 'react';//this is just for using hook
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
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

  // switchNameHandler = (newName) =>{
  //   // console.log("Was clicked!");
  //   //DON'T DO THIS: personsState.persons[0].name ="Nazanin";
  //   this.setState({persons:  [
  //     {name: newName, age: 28},
  //     {name: 'Manu', age: 29},
  //     {name: 'Stephanie', age: 30} 
  //   ]})
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }; //OR  Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({persons:  [
    //   {name: 'Nazanin', age: 28},
    //   {name: event.target.value, age: 29},
    //   {name: 'Stephanie', age: 30} 
    // ]})
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              change={(event) => this.nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
          {/* <Person // we can use mapping through array instead of it
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Ali')}
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
        </div>
      );

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a React App!</h1>
          <p>This is really working</p>
          <button
            style={style}
            onClick={() => this.togglePersonsHandler()}>Switch Name</button>
          {persons}
          {/* {
          this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Ali')}
                changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div> : null
        } */}
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


