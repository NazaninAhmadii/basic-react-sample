// import React, { useState } from 'react';//this is just for using hook
import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
// import Radium, { StyleRoot } from 'radium'
import WithWrappClass from '../components/hoc/WithWrappClass'
import Aux from '../components/hoc/Aux'

//*****************************************/
//**********CLASS BASE COMPONENT **********/
//*****************************************/ 
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = { // it will be add to constructor 
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanei', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true // should return true to allow the component to update
  }

  // componentWillMount() { // Not safe to use
  //   console.log('[App.js] componentWillMount')
  // }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }; //OR  Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.hangeCounter + 1
      }
    })
    // this.setState({ persons: persons,
    // changeCounter: this.state.changeCounter+ 1 });
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
    console.log('[App.js] rendering...')
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
      // <StyleRoot>
      <Aux>
        <div className={classes.App}>
          <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
          {this.state.showCockpit ?
            <Cockpit showPersons={this.state.showPersons} personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler} /> : ''}

          {persons}

        </div>
      </Aux>
      // </StyleRoot>
    );
  }
}

export default WithWrappClass(App, classes.App)


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

// export default Radium(App);



