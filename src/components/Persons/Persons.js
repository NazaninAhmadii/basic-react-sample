import React, { PureComponent } from 'react'
import ErrorBoundary from '../../ErrorBoundry/ErrorBoundary'
import Person from './Person/Person';

class Persons extends PureComponent {

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return null
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed != this.props.changed || 
    //         nextProps.clicked != this.props.clicked) {//it compares just the p
    //         //ointer, because this is an array which will be copy by reference, so this is just shallow comparison, it does not deeply compare it
    //         //and it works just because in App.js we did this: const person = { ...this.state.persons[personIndex] }; 
    //         // helps the component to just get rendered when the props has been changed
    //         return true
    //     } else {
    //         return false
    //     }
    //     // return true // each time when something changes all the component tree gets render
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('[Persons.js] componnetDidUpdate')
    }

    //cleanup, it happens right before he component has removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
                click={() => this.props.clicked(index)}
                change={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
            /></ErrorBoundary>
        }

        )
    }

}

export default Persons